"use client";
import { FaListUl } from "react-icons/fa";
import { CiViewColumn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import { useContext } from "react";
import { UserContext } from "@/app/context/UserContext";
import { NavigateContext } from "@/app/context/NavigateContext";
import { TicketContext } from "@/app/context/TicketContext";

const NavBarItens = () => {
  const { user, handleToggle } = useContext(UserContext);
  const { ticket, toggleTicket } = useContext(TicketContext);
  const { handleToggleKanban, showKanban } = useContext(NavigateContext);

  return (
    <div className="flex w-full max-h-20 gap-4 justify-around content-center items-center">
      <div className="flex gap-4 ">
        <span
          className="cursor-pointer text-white hover:text-[var(--main)]"
          title="Novo ticket"
          onClick={() => toggleTicket && toggleTicket()}
        >
          <IoAddCircleOutline size={40} />
        </span>
        <span className=" text-white">
          <RxDividerVertical size={40} />
        </span>
        <span className="cursor-pointer text-white hover:text-[var(--main)]">
          <FaListUl size={40} />
        </span>
        <span
          onClick={() => handleToggleKanban && handleToggleKanban()}
          className={`cursor-pointer  hover:text-[var(--main)] ${
            showKanban ? "rotate-90 text-[var(--main)]" : "text-white"
          }`}
        >
          <CiViewColumn size={40} />
        </span>
      </div>
      <div className=" sm:flex hidden">
        <input
          type="text"
          id="pesquisa"
          className="h-8 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center"
        />
      </div>
      <div>
        <span
          onClick={() => handleToggle && handleToggle()}
          className="cursor-pointer text-white hover:text-[var(--main)]"
        >
          <FaUserCircle size={40} />
        </span>
      </div>
    </div>
  );
};
export default NavBarItens;
