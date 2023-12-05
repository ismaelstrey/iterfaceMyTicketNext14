import Image from 'next/image'
import React from 'react'
import TextMessage from './_textMessage'

function ChatBoard() {
    return (
        <div className='flex h-screen w-full'>

            <TextMessage>
                <ul className='flex flex-col gap-4 p-6 border-2 w-[80%] border-solid border-green-600 rounded-md m-4'>
                    <div className='flex gap-4'><span className=''> <Image src='/atendente.jpg' width={80} height={80} alt='Usuario' className='rounded-full border-4 border-solid border-green-500' /></span>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magnam, natus eligendi eaque rem dolore nesciunt magni minus corporis voluptatibus doloremque. Quod mollitia impedit aut, repellendus dolores voluptatibus esse doloremque?</li>
                    </div>
                    <li className=' flex w-full float-right'>05/12/2023 17:30</li>
                </ul>
                <ul className='flex flex-row-reverse gap-4 p-6 border-2 w-[80%] border-solid border-blue-400 rounded-md m-4 float-right'>
                    <span className=''> <Image src='/atendente.jpg' width={80} height={80} alt='Usuario' className='rounded-full border-4 border-solid border-green-500' /></span>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magnam, natus eligendi eaque rem dolore nesciunt magni minus corporis voluptatibus doloremque. Quod mollitia impedit aut, repellendus dolores voluptatibus esse doloremque?</li>
                </ul>
            </TextMessage>
        </div>
    )
}

export default ChatBoard