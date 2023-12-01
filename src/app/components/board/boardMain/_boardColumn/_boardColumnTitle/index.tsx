import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5';
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
                <IoAddCircleOutline size={40} />
            </span>
        </div>
    )
}

export default BoardTitle