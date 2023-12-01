import React, { ReactNode } from 'react'
import CardWrap from './_cardWrap';
import CardTitle from './_cardTitle';
import CardMain from './_cardMain';
import CardFooter from './_cardFooter';


const Card = () => {
    return (
       <CardWrap>
        <CardTitle id={1} title='Internet Fora' subTitle='LP-Internet' />
        <CardMain description='A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum .' />
        <CardFooter />
       </CardWrap>
    )
}

export default Card