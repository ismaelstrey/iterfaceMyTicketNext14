import React, { ReactNode } from 'react'
interface navbarWrapProps {
    children: ReactNode;
}

const navbarWrap = ({ children }: navbarWrapProps) => {
    return (
        <div className='flex w-screen h-20 bg-sub-menu border-solid border-b-2'>{children}</div>
    )
}

export default navbarWrap