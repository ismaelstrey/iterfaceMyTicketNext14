"use client"
import React, { createContext, useState, ReactNode } from "react";
import { TYPE, apiTicket } from '@/app/utils/api/api'
import { alterarTipoPorId } from "../helper/newObjeto";
interface ApiticketProps {
  id: number;
  title: string;
  prioridade: string;
  type: string;
  subTitle: string;
  description: string;
}

interface TicketContextProps {
  apiTicket: [ApiticketProps] | any[];
  ticketType: string[];
  handleToggleTicket?: () => void;
  atualizarTicket?: (id: number, tipo: string) => void;
  ticket: boolean;
}

const defaultContextValue: TicketContextProps = {
  ticket: false, // ou o valor padrão desejado
  apiTicket: apiTicket || null,
  ticketType: TYPE
};

export const TicketContext = createContext<TicketContextProps>(defaultContextValue);

interface TicketProviderProps {
  children?: ReactNode;
}

function TicketProvider({ children }: TicketProviderProps) {
  const [currentTicket, setCurrentTicket] = useState<boolean>(defaultContextValue.ticket);
  const [currentapiTicket, setCurrentapiTicket] = useState<ApiticketProps[]>(defaultContextValue.apiTicket);
  const [currentTicketType, setcurrentTicketType] = useState(defaultContextValue.ticketType);

  const toggleTicket = () => {
    setCurrentTicket(!currentTicket);
  };
  const updateTicket = (id: number, tipo: string): void => {
    setCurrentapiTicket(alterarTipoPorId(currentapiTicket, id, tipo));
  };

  const contextValue: TicketContextProps = {
    handleToggleTicket: toggleTicket,
    atualizarTicket: updateTicket,
    ticket: currentTicket,
    apiTicket: currentapiTicket,
    ticketType: currentTicketType,

  };


  return (
    <TicketContext.Provider value={contextValue}>{children}</TicketContext.Provider>
  );
}

export default TicketProvider;
