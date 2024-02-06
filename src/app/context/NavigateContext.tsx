"use client"
import React, { createContext, useState, ReactNode } from "react";

interface NavigateContextProps {
  navigate: boolean;
  showKanban: boolean;
  handleToggle?: () => void;
  handleToggleKanban?: () => void;
}

const defaultContextValue: NavigateContextProps = {
  navigate: true, // ou o valor padrão desejado
  showKanban: true
};

export const NavigateContext = createContext<NavigateContextProps>(defaultContextValue);

interface NavigateProviderProps {
  children?: ReactNode;
}

function NavigateProvider({ children }: NavigateProviderProps) {
  const [currentNavigate, setCurrentNavigate] = useState<boolean>(defaultContextValue.navigate);
  const [showKanban, setShowKanban] = useState<boolean>(defaultContextValue.showKanban);

  const toggleNavigate = () => {
    setCurrentNavigate(!currentNavigate);
  };
  const toggleKanban = () => {
    setShowKanban(!showKanban);
  };

  const contextValue: NavigateContextProps = {
    handleToggle: toggleNavigate,
    handleToggleKanban: toggleKanban,
    navigate: currentNavigate,
    showKanban
  };

  return (
    <NavigateContext.Provider value={contextValue}>{children}</NavigateContext.Provider>
  );
}

export default NavigateProvider;
