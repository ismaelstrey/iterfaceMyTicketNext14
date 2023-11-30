import React, { ReactNode } from 'react'
interface BoardWrapProps {
    children: ReactNode;
}
const BoardWrap = ({ children }: BoardWrapProps) => {
    return (
        <div className='flex w-full h-full gap-4 '>
            {children}
        </div>
    )
}

export default BoardWrap