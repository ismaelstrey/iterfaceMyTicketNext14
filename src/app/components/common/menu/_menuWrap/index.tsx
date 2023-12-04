'use client'
import React, { ReactNode, useContext } from 'react';
import ItensMenu from '../_itensMenu';
import { NavigateContext } from '@/app/context/NavigateContext';
interface MenuWrapProps {
    children: ReactNode;
}
const MenuWrap = ({ children }: MenuWrapProps) => {
    // Desestruturar dentro da função do componente
    const { navigate } = useContext(NavigateContext);


    return (
        <div className={`flex h-screen bg-menu ${navigate ? 'w-20' : ''}`}>
            {children}
            {navigate && <ItensMenu />}
        </div>
    );
};

export default MenuWrap;
