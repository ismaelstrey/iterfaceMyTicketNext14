import React, { ReactNode } from 'react'
import BoardTitle from './_boardColumnTitle'
interface BoardColumnProps {
    title: string;
    children:  ReactNode;
}
const BoardColumn = ({ title,children }: BoardColumnProps) => {
    return (
        <div className='flex flex-col border-r-2 border-solid border-white min-w-[20rem] h-[90vh] first:border-l-2 '>
            <BoardTitle title={title} />
            <div>{children}</div>
        </div>
    )
}

export default BoardColumn