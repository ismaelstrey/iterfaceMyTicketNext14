import React, { ReactNode } from 'react'
import TicketProvider from './TicketContext'
import NavigateProvider from './NavigateContext'
import UserProvider from './UserContext'
interface AllProviderProps {
    children: ReactNode
}
function AllProvider({ children }: AllProviderProps) {
    return (
        <TicketProvider>
            <NavigateProvider>
                <UserProvider>
                    {children}
                </UserProvider>
            </NavigateProvider>
        </TicketProvider>

    )
}

export default AllProvider