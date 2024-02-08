"use client"
import React, { createContext, useState, ReactNode } from "react";

interface TicketContextProps {
  ticket: boolean;
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

  const HandleToggleTicket = () => setCurrentTicket(!currentTicket);

  const contextValue: TicketContextProps = {
    ticket: currentTicket,
    toggleTicket: HandleToggleTicket,
  };

  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketProvider;
