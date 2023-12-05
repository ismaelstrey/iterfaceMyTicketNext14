import React from 'react'
import ListUser from './_ListUser'
import UserTecnico from '../tecnicoUser'

function ChatUser() {
    return (
        <div className='flex flex-col h-screen w-1/4 bg-menu'>
            <ul className='p-2'><UserTecnico /></ul>
            <hr className=' flex w-full my-10 border-t-2 border-solid border-white' />
            <ul className='flex w-full flex-col gap-4 content-center items-center p-5'>
                <ListUser />
                <ListUser />
                <ListUser />
                <ListUser />
                <ListUser />
                <ListUser />
            </ul>
        </div>
    )
}

export default ChatUser