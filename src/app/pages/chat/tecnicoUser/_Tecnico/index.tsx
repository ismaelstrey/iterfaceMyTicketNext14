import Image from 'next/image'
import React from 'react'

function Tecnico() {
    return (

        <li className='flex bg-black p-4 rounded-md  hover:shadow-cyan-500 cursor-pointer border-l-8 border-green-500 border-solid gap-3 items-center'>
            <span className='flex'> <Image src='/atendente.jpg' width={50} height={50} alt='Usuario' className='rounded-full border-4 border-solid border-green-500' /></span>
            <div className='flex flex-col w-full min-w-[100px] text-gray-100'>
                <span className='text-sm text-center  '>Ismael Strey Pereira</span>
            </div>

        </li>
    )
}

export default Tecnico