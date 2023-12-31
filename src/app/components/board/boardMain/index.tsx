import React from 'react'
import BoardWrap from './_boardWrap'
import BoardColumn from './_boardColumn'
import Card from '../card'
import { TYPE, apiTicket } from '@/app/utils/api/api'


const Board = () => {

    const RenderBoard = () => TYPE.map((l, key) =>
        <BoardColumn title={l} key={key}>
            {apiTicket.filter((filtra) => filtra.type === l)
                .map((lista) =>
                    <Card key={lista.id} id={lista.id} type={lista.type} title={lista.title} subTitle={lista.subTitle} description={lista.description} prioridade={lista.prioridade} />)}
        </BoardColumn>)
    return (
        <BoardWrap>
            <RenderBoard />
        </BoardWrap>
    )
}

export default Board