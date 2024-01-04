"use client"
import React, { createContext, useState, ReactNode } from "react";

interface TicketContextProps {
  handleToggleTicket?: () => void;
  ticket: boolean;
}

const defaultContextValue: TicketContextProps = {
  ticket: false, // ou o valor padrão desejado
};

export const TicketContext = createContext<TicketContextProps>(defaultContextValue);

interface TicketProviderProps {
  children?: ReactNode;
}

function TicketProvider({ children }: TicketProviderProps) {
  const [currentTicket, setCurrentTicket] = useState<boolean>(defaultContextValue.ticket);

  const toggleTicket = () => {
    setCurrentTicket(!currentTicket);
  };

  const contextValue: TicketContextProps = {
    handleToggleTicket: toggleTicket,
    ticket: currentTicket,
  };

  return (
    <TicketContext.Provider value={contextValue}>{children}</TicketContext.Provider>
  );
}

export default TicketProvider;
