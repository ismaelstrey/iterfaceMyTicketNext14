import React, { useContext } from 'react'
import BoardWrap from './_boardWrap'
import BoardColumn from './_boardColumn'
import Card from '../card'
const TYPE = ['Aberto','Iniciado','Pauzado','Concuido']

const Board = () => {
    
    const RenderBoard = () => TYPE.map((l,key)=><BoardColumn title={l} key={key}> <Card/></BoardColumn>)
    return (
        <BoardWrap>            
            <RenderBoard/>
        </BoardWrap>
    )
}

export default Board