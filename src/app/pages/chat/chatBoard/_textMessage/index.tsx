import React from 'react'
interface TextMessageProps {
    children: React.ReactNode
}


function TextMessage({ children }: TextMessageProps) {
    return (
        <div>{children}</div>
    )
}

export default TextMessage