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

const BoardColumn = ({ title, children }: BoardColumnProps) => {
    const { atualizarTicket } = useContext(TicketContext)
    const [alteraStatus, setAlteraStatus] = useState('')
    const [pegaOrigem, setPegaOrigem] = useState('')
    useEffect(() => {

    }, [alteraStatus])


    pegaOrigem || alteraStatus ? console.log(alteraStatus, pegaOrigem) : ''
    return (
        <div id={title} onDragOver={(e) => e.preventDefault()}
            onDrop={() => setPegaOrigem(title)}
            onDragStart={(event) => {
                drag(event, title).then(res => setAlteraStatus('teste'))

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