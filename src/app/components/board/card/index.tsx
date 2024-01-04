import React from 'react'
import CardWrap from './_cardWrap';
import CardTitle from './_cardTitle';
import CardMain from './_cardMain';
import CardFooter from './_cardFooter';
import { limitarTexto } from '@/app/helper/helper';

interface CardPorps {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    type: string;
    prioridade?: string;
}

const Card = ({ id, title, subTitle, description, type, prioridade }: CardPorps) => {
    return (
        <CardWrap id={id} type={type} prioridade={prioridade}>
            <CardTitle id={id} title={title} subTitle={subTitle} type={type} prioridade={prioridade} />
            <CardMain description={limitarTexto(description)} className='hidden' />
            <CardFooter />
        </CardWrap>
    )
}

export default Card