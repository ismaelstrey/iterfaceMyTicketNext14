import React, { ReactNode } from 'react'
import NavbarWrap from './_navbarWrap'
interface navbarProps {
    children: ReactNode;
}
const Navbar = ({ children }: navbarProps) => {
    return (
        <NavbarWrap>
            {children}
        </NavbarWrap>
    )
}
export default Navbar