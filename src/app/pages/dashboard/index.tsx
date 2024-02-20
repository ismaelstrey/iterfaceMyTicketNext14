"use client";
import React, { useContext } from "react";
import DashBoardWrap from "./_dashboardWrap";
import Menu from "@/components/common/menu";
import Navbar from "@/components/common/navbar/Navbar";
import SubMenu from "@/components/common/menu/_subMenu/_submenu";
import ModalUser from "@/components/common/modalUser";
import Board from "@/components/board/boardMain";
import List from "@/components/list";
import { NavigateContext } from "@/context/NavigateContext";
import { NovoTicket } from "@/components/novoTicket/NovoTicket";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

const DashBoard = () => {
  const { showKanban } = useContext(NavigateContext);
  return (
    <QueryClientProvider client={queryClient}>
      <DashBoardWrap>
        <Menu />
        <SubMenu />
        <div className="flex flex-col w-full">
          <Navbar>
            <span></span>
          </Navbar>
          {showKanban ? <Board /> : <List />}
        </div>
        <ModalUser />
        <NovoTicket />
      </DashBoardWrap>
    </QueryClientProvider>
  );
};

export default DashBoard;
