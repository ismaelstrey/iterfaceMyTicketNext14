import React, { useEffect, useState } from "react";
export const UserContext = React.createContext<boolean>(false);

function UserProvider(props: { children: React.ReactNode }) {
    const [user, setUser] = useState<boolean>(false);
    const handleTogle = () => setUser(!user)


    return (
        <UserContext.Provider value={{ handleTogle, user }}>
            {props.children}
        </UserContext.Provider>
    )



}
export default UserProvider