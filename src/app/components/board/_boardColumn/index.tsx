import React from 'react'
import BoardTitle from './_boardColumnTitle'
interface BoardColumnProps {
    title: string;
}
const BoardColumn = ({ title }: BoardColumnProps) => {
    return (
        <div className='flex flex-col border-r-2 border-solid border-white min-w-[20rem] h-[90vh] '>
            <BoardTitle title={title} />
        </div>
    )
}

export default BoardColumn