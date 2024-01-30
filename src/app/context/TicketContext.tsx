"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { TYPE, apiTicket, tiketApi } from "@/app/utils/api/api";
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
  apiTicket: ApiticketProps[] | null;
  ticketType: string[];
  ticket: boolean;
  handleToggleTicket?: () => void;
  updateTicket?: (id: number, tipo: string, apiTiket: ApiticketProps[]) => void;
  toggleTicket?: () => void;
}

const defaultContextValue: TicketContextProps = {
  ticket: false, // ou o valor padrão desejado
  apiTicket: apiTicket,
  ticketType: TYPE,
};

export const TicketContext =
  createContext<TicketContextProps>(defaultContextValue);

interface TicketProviderProps {
  children?: ReactNode;
}
function TicketProvider({ children }: TicketProviderProps) {
  const [currentTicket, setCurrentTicket] = useState<boolean>(
    defaultContextValue.ticket
  );

  const [currentapiTicket, setCurrentapiTicket] = useState<
    ApiticketProps[] | null
  >(null);
  const [currentTicketType, setcurrentTicketType] = useState(
    defaultContextValue.ticketType
  );
  const handleTicketApi = () => tiketApi().then((l) => setCurrentapiTicket(l));

  useEffect(() => {
    handleTicketApi();
  }, []);

  const toggleTicket = () => {
    setCurrentTicket(!currentTicket);
  };

  const contextValue: TicketContextProps = {
    handleToggleTicket: toggleTicket,
    ticket: currentTicket,
    apiTicket: currentapiTicket,
    ticketType: currentTicketType,
    updateTicket: atualizarTicket,
    toggleTicket: toggleTicket,
  };

  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketProvider;
