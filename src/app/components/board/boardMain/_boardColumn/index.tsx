'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import BoardTitle from './_boardColumnTitle'
import { drag, drop } from '@/app/helper/dragInDrop';
import { TicketContext } from '@/app/context/TicketContext';
interface BoardColumnProps {
    title: string;
    children: ReactNode;
    setAlteraStatus?: () => void;
}
interface alteraStatusProps {
    alteraStatus: [];
    setAlteraStatus?: () => void;
}
const BoardColumn = ({ title, children }: BoardColumnProps) => {
    const [alteraStatus, setAlteraStatus] = useState([])
    useEffect(() => {

    }, [alteraStatus])
    const { atualizarTicket } = useContext(TicketContext)

    console.log(alteraStatus)
    return (
        <div id={title} onDragOver={(e) => e.preventDefault()}
            onDrop={e => drop(e, title)}
            onDragStart={(event) => {
                let executa = drag(event, title).then(res => setAlteraStatus(res))

            }}
            // onDragStart={(event) => atualizarTicket(drag(event))}
            // aria-colindex={title}
            className='flex flex-col border-r-2 border-solid border-white min-w-[10rem] min-h-[90vh] first:border-l-2 '>
            <BoardTitle title={title}

            />
            <div>{children}</div>
        </div>
    )
}

export default BoardColumn