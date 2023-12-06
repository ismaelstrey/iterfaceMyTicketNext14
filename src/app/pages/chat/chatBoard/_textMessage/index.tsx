import React from 'react'
interface TextMessageProps {
    children: React.ReactNode
}


function TextMessage({ children }: TextMessageProps) {
    return (
        <div className='min-h-[80vh]'>{children}</div>
    )
}

export default TextMessage