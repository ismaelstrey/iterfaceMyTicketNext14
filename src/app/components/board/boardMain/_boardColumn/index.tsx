import React, { ReactNode, useRef } from 'react'
import BoardTitle from './_boardColumnTitle'
import { drag, drop } from '@/app/helper/dragInDrop';
interface BoardColumnProps {
    title: string;
    children: ReactNode;
}
const BoardColumn = ({ title, children }: BoardColumnProps) => {


    return (
        <div id={title} onDragOver={(e) => e.preventDefault()}
            onDrop={e => drop(e, title)}
            onDragStart={(event) => drag(event)}
            // aria-colindex={title}
            className='flex flex-col border-r-2 border-solid border-white min-w-[20rem] h-[90vh] first:border-l-2 '>
            <BoardTitle title={title}

            />
            <div>{children}</div>
        </div>
    )
}

export default BoardColumn