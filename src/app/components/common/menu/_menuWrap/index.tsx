import React, { ReactNode } from 'react'
import ItensMenu from '../_itensMenu';
interface MenuWrapProps {
    children: ReactNode;
}

const MenuWrap = ({ children }: MenuWrapProps) => {
    return (
        <div className='flex w-20 h-screen bg-menu '>
            {children}
            <ItensMenu />
        </div>
    )
}

export default MenuWrap