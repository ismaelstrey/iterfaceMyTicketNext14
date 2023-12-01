import React, { ReactNode } from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { FaList } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";

interface CardFooterProps {
    children: ReactNode;
}

const CardFooter = () => {
    return (
        <div className='flex h-16 w-full border-t-2 border-solid border-white content-center items-center'>
          <div className='flex w-full justify-around'>
          <span className='hover:text-[var(--main)] cursor-pointer'><LuMessagesSquare size={25} /></span>
          <span className='hover:text-[var(--main)] cursor-pointer'><FaList size={25} /></span>
          <span className='hover:text-[var(--main)] cursor-pointer'><FaRegUser size={25} /></span>
          <span className='hover:text-[var(--main)] cursor-pointer'><ImCalendar size={25} /></span>
          </div>
        </div>
    )
}

export default CardFooter