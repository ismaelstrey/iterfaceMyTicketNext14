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
}

const Card = ({ id, title, subTitle, description, type }: CardPorps) => {
    return (
        <CardWrap>
            <CardTitle id={id} title={title} subTitle={subTitle} type={type} />
            <CardMain description={limitarTexto(description)} />
            <CardFooter />
        </CardWrap>
    )
}

export default Card