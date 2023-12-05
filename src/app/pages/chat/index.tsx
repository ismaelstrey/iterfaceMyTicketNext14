import React from 'react'
import ChatUser from './chatUser'
import ChatBoard from './chatBoard'

function Chat() {
    return (
        <div className='flex h-screen w-screen'>
            <ChatUser />
            <ChatBoard />
        </div>
    )
}

export default Chat