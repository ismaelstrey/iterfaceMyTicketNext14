import React, { ReactNode } from 'react'
interface DashBoardWrapProps {
    children: ReactNode;
}

const DashBoardWrap = ({ children }: DashBoardWrapProps) => {
    return (
        <div className='flex w-screen h-screen bg-main'>{children}</div>
    )
}

export default DashBoardWrap