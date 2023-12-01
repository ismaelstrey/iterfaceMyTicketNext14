import React from 'react'
import DashBoardWrap from './_dashboardWrap'
import Menu from '@/app/components/common/menu'
import Navbar from '@/app/components/common/navbar/Navbar'
import SubMenu from '@/app/components/common/menu/_subMenu/_submenu'
import ModalUser from '@/app/components/common/modalUser'
import UserProvider from '@/app/context/UserContext'
import Board from '@/app/components/board/boardMain'

const DashBoard = () => {
    return (
        <DashBoardWrap>
            <UserProvider >
                <Menu />
                <SubMenu />
                <Navbar>
                    <Board />
                </Navbar>
                <ModalUser />
            </UserProvider>
        </DashBoardWrap>
    )
}

export default DashBoard