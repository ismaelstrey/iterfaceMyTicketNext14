"use client"
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { TYPE, apiTicket, tiketApi } from '@/app/utils/api/api'
import { atualizarTicket } from "../helper/newObjeto";
interface ApiticketProps {
  id: number;
  title: string;
  prioridade: string;
  type: string;
  subTitle: string;
  description: string;
}

interface TicketContextProps {
  apiTicket: ApiticketProps[];
  ticketType: string[];
  handleToggleTicket?: () => void;
  atualizarTicket?: (id: number, tipo: string) => void;
  updateTicket?: (id: number, tipo: string, apiTiket: ApiticketProps[]) => void;
  toggleTicket?: () => void;
  setCurrentapiTicket?: (id: number, type: string, tiket: ApiticketProps[]) => void;
  ticket: boolean;
}

const defaultContextValue: TicketContextProps = {
  ticket: false, // ou o valor padrão desejado
  apiTicket: apiTicket,
  ticketType: TYPE
};

export const TicketContext = createContext<TicketContextProps>(defaultContextValue);

interface TicketProviderProps {
  children?: ReactNode;
}
function TicketProvider({ children }: TicketProviderProps) {
  const [currentTicket, setCurrentTicket] = useState<boolean>(defaultContextValue.ticket);
  const [currentapiTicket, setCurrentapiTicket] = useState<ApiticketProps[]>([]);
  const [currentTicketType, setcurrentTicketType] = useState(defaultContextValue.ticketType);

  useEffect(() => {
    tiketApi().then((l) => setCurrentapiTicket(l))
  }, [])
  const toggleTicket = () => {
    setCurrentTicket(!currentTicket);
  };
  const updateTicket = (id: number, tipo: string, apiTiket: ApiticketProps[]): void => {

    let newArray = () => atualizarTicket(id, tipo, apiTiket)
    newArray()

  };

  console.log(currentapiTicket)
  const contextValue: TicketContextProps = {
    handleToggleTicket: toggleTicket,
    atualizarTicket: atualizarTicket,
    ticket: currentTicket,
    apiTicket: currentapiTicket,
    ticketType: currentTicketType,
    updateTicket: updateTicket,
    toggleTicket: toggleTicket,
    setCurrentapiTicket: setCurrentapiTicket

  };


  return (
    <TicketContext.Provider value={contextValue}>{children}</TicketContext.Provider>
  );
}

export default TicketProvider;


