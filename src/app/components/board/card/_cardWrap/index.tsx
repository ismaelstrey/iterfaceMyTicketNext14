import React, { ReactNode } from 'react'
interface CardWrapProps {
    children: ReactNode;
    id: number;
    type: string;
}

const CardWrap = ({ children, id, type }: CardWrapProps) => {
    return (
        <div className='flex m-2 w-80 h-60 bg-sub-menu rounded-md' draggable accessKey={String(id)} aria-description={type}  >
            <div className='flex h-full w-3 bg-green-500 rounded-l-md'></div>
            <div className='flex w-full flex-col justify-between text-white'>{children}</div>
        </div>
    )
}

export default CardWrap