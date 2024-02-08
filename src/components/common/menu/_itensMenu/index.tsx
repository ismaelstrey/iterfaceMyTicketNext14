import React from 'react'
import { TbArticle } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { DiAptana } from "react-icons/di";
import { BiLogOutCircle } from "react-icons/bi";
import { HiTicket } from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";



const size = 40;

function ItensMenu() {
    return (
        <div className='flex w-20 justify-center items-center content-center'>
            <ul className='flex flex-col gap-6 text-white'>
                <li className='cursor-pointer hover:text-[var(--main)]'><IoHome size={size} /></li>
                <li className='cursor-pointer hover:text-[var(--main)]'><TbArticle size={size} /></li>
                <li className='cursor-pointer hover:text-[var(--main)]'><HiTicket size={size} /></li>
                <li className='cursor-pointer hover:text-[var(--main)]'><FaTasks size={size} /></li>
                <li className='cursor-pointer hover:text-[var(--main)]'><FaUserCog size={size} /></li>
                <li className='cursor-pointer hover:text-[var(--main)]'><IoMdAnalytics size={size} /></li>
                <li className='cursor-pointer hover:text-[var(--main)]'><DiAptana size={size} /></li>
                <hr className='mt-10' />
                <li className='cursor-pointer text-red-500 hover:text-[var(--main)]'><BiLogOutCircle size={size} /></li>



            </ul>
        </div>
    )
}

export default ItensMenu