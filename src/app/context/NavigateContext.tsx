"use client"
import React, { createContext, useState, ReactNode } from "react";

interface NavigateContextProps {
  handleToggle?: () => void;
  navigate: boolean;
}

const defaultContextValue: NavigateContextProps = {
  navigate: false, // ou o valor padrão desejado
};

export const NavigateContext = createContext<NavigateContextProps>(defaultContextValue);

interface NavigateProviderProps {
  children?: ReactNode;
}

function NavigateProvider({ children }: NavigateProviderProps) {
  const [currentNavigate, setCurrentNavigate] = useState<boolean>(defaultContextValue.navigate);

  const toggleNavigate = () => {
    setCurrentNavigate(!currentNavigate);
  };

  const contextValue: NavigateContextProps = {
    handleToggle: toggleNavigate,
    navigate: currentNavigate,
  };

  return (
    <NavigateContext.Provider value={contextValue}>{children}</NavigateContext.Provider>
  );
}

export default NavigateProvider;
