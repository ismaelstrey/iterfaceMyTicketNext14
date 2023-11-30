import React from 'react'
import BoardWrap from './_boardWrap'
import BoardColumn from './_boardColumn'

const Board = () => {
    return (
        <BoardWrap>
            <BoardColumn title='Aberto' />
            <BoardColumn title='Iniciado' />
            <BoardColumn title='Pauzado' />
            <BoardColumn title='Concuido' />
            <BoardColumn title='Cancelado' />
        </BoardWrap>
    )
}

export default Board