import React, { ReactNode } from 'react'
import NavBarItens from '../_navbarItens';
interface navbarWrapProps {
    children: ReactNode;
}

const navbarWrap = ({ children }: navbarWrapProps) => {
    return (
        <div className='flex w-full flex-col fixed'>
            <div className='flex w-full h-20 bg-sub-menu border-solid border-b-2'><NavBarItens /></div>
            <div>{children}</div>
        </div>
    )
}

export default navbarWrap