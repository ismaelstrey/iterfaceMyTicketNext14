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
  ticket: boolean;
  handleToggleTicket?: () => void;

  toggleTicket?: () => void;
}

const defaultContextValue: TicketContextProps = {
  ticket: false, // ou o valor padrão desejado
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

  const toggleTicket = () => {
    setCurrentTicket(!currentTicket);
  };

  const contextValue: TicketContextProps = {
    handleToggleTicket: toggleTicket,
    ticket: currentTicket,
    toggleTicket: toggleTicket,
  };

  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketProvider;
