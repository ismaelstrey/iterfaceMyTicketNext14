import React, { ReactNode } from 'react'
interface BoardWrapProps {
    children: ReactNode;
}
const BoardWrap = ({ children }: BoardWrapProps) => {
    return (
        <div className='flex flex-col md:flex-col sm:flex-col lg:flex-row w-full h-full gap-4 content-center mt-28 items-start justify-center'>
            {children}
        </div>
    )
}

export default BoardWrap