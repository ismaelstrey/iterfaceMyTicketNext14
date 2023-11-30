import React, { ReactNode } from 'react'
interface DashBoardWrapProps {
    children: ReactNode;
}

const DashBoardWrap = ({ children }: DashBoardWrapProps) => {
    return (
        <div className='bg-main'>
            <div className='flex w-screen h-full'>{children}</div>

        </div>
    )
}

export default DashBoardWrap