"use client"
import React, { createContext, useState, ReactNode } from "react";

interface UserContextProps {
  handleToggle: () => void;
  user: boolean;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  handleToggle?: () => void;
  user?: boolean;
  children?: ReactNode;
}

function UserProvider({ handleToggle, user, children }: UserProviderProps) {
  const [currentUser, setCurrentUser] = useState<boolean>(user || false);
  const toggleUser = () => {
    console.log("executado",currentUser)
    setCurrentUser(!currentUser)
};

  const contextValue: UserContextProps = {
    handleToggle: handleToggle || toggleUser,
    user: currentUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
