import Image from 'next/image'
import React from 'react'

function ListUser() {
    return (

        <li className='flex bg-sub-menu p-4 rounded-md shadow-md shadow-green-700 hover:shadow-cyan-400 cursor-pointer border-l-8 border-green-600 border-solid gap-3 items-center'>
            <span className='flex w-full h-full'> <Image src='/atendente.jpg' width={50} height={50} alt='Usuario' className='w-20 h-20 rounded-full border-4 border-solid border-green-500' /></span>
            <div className='flex flex-col w-full min-w-[200px] text-gray-100'>
                <span className='text-sm text-center  '>Fernando da Costa Junior</span>
                <span className='text-xs text-gray-200'>Internet BandaSul telecom</span>
                <span className='text-[0.60rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex nihil consequuntur? </span>
            </div>

        </li>
    )
}

export default ListUser