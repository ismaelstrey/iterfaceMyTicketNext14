import React, { ReactNode } from 'react'
interface DashBoardWrapProps {
    children: ReactNode;
}

const DashBoardWrap = ({ children }: DashBoardWrapProps) => {
    return (
        <div className='bg-main flex w-full flex-col h-full'>
            <div className='flex w-full h-full'>{children}</div>

        </div>
    )
}

export default DashBoardWrap