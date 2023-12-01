import React, { ReactNode } from 'react'
interface BoardWrapProps {
    children: ReactNode;
}
const BoardWrap = ({ children }: BoardWrapProps) => {
    return (
        <div className='flex w-full h-full gap-4 content-center items-center justify-center'>
            {children}
        </div>
    )
}

export default BoardWrap