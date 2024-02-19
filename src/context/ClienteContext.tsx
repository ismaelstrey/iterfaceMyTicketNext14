"use client"
import React, { createContext, useState, ReactNode } from "react";

interface ClienteContextProps {
    ticket: boolean;
    toggleTicket?: () => void;
}

const defaultContextValue: ClienteContextProps = {
    ticket: false, // ou o valor padrão desejado
};

export const TicketContext =
    createContext<ClienteContextProps>(defaultContextValue);

interface TicketProviderProps {
    children?: ReactNode;
}
function TicketProvider({ children }: TicketProviderProps) {
    const [currentTicket, setCurrentTicket] = useState<boolean>(
        defaultContextValue.ticket
    );

    const HandleToggleTicket = () => setCurrentTicket(!currentTicket);

    const contextValue: ClienteContextProps = {
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
