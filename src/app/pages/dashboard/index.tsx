import React from 'react'
import DashBoardWrap from './_dashboardWrap'
import Menu from '@/app/components/common/menu'
import Navbar from '@/app/components/common/navbar/Navbar'
import SubMenu from '@/app/components/common/menu/_subMenu/_submenu'

const DashBoard = () => {
    return (
        <DashBoardWrap>
            <Menu />
            <SubMenu />
            <Navbar />
        </DashBoardWrap>
    )
}

export default DashBoard