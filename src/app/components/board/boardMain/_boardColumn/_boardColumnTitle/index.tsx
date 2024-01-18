
import { IconType } from '@/app/helper/helper';
import React from 'react'
interface BoardTitleProps {
    title: string;
}
const BoardTitle = ({ title }: BoardTitleProps) => {
    return (
        <div className='flex w-full h-16 justify-around items-center font-extrabold text-white uppercase'>
            {title}
            <span
                className="cursor-pointer hover:text-white text-[var(--main)]"
                title="Novo ticket">
                <span className=''> {IconType(title)}</span>
            </span>
        </div>
    )
}

export default BoardTitle