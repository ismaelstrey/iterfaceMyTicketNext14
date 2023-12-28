'use client'
import React, { useContext } from 'react'
import DashBoardWrap from './_dashboardWrap'
import Menu from '@/app/components/common/menu'
import Navbar from '@/app/components/common/navbar/Navbar'
import SubMenu from '@/app/components/common/menu/_subMenu/_submenu'
import ModalUser from '@/app/components/common/modalUser'
import UserProvider from '@/app/context/UserContext'
import Board from '@/app/components/board/boardMain'
import List from '@/app/components/list'
import { NavigateContext } from '@/app/context/NavigateContext'

const DashBoard = () => {
    const { showKanban } = useContext(NavigateContext);
    return (
        <DashBoardWrap>
            <UserProvider >
                <Menu />
                <SubMenu />
                <Navbar>
                    {showKanban ? <Board /> : <List />}

                </Navbar>
                <ModalUser />
            </UserProvider>
        </DashBoardWrap>
    )
}

export default DashBoard