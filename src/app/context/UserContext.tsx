"use client"
import React, { createContext, useState, ReactNode } from "react";

interface UserContextProps {
  handleToggle?: () => void;
  user: boolean;
}

const defaultContextValue: UserContextProps = {
  user: false, // ou o valor padrão desejado
};

export const UserContext = createContext<UserContextProps>(defaultContextValue);

interface UserProviderProps {
  children?: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [currentUser, setCurrentUser] = useState<boolean>(defaultContextValue.user);

  const toggleUser = () => {
    console.log("executado", currentUser);
    setCurrentUser(!currentUser);
  };

  const contextValue: UserContextProps = {
    handleToggle: toggleUser,
    user: currentUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
