import { FaListUl } from "react-icons/fa";
import { CiViewColumn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

const NavBarItens = () => {
    return (
        <div className='flex w-full gap-4 justify-around content-center items-center'>
            <div className="flex gap-4 ">
                <span className="cursor-pointer text-white hover:text-[var(--main)]" title="Novo ticket"><IoAddCircleOutline size={40} /></span>
                <span className=" text-white"><RxDividerVertical size={40} /></span>
                <span className="cursor-pointer text-white hover:text-[var(--main)]"><FaListUl size={40} /></span>
                <span className="cursor-pointer text-white hover:text-[var(--main)]"><CiViewColumn size={40} /></span>
            </div>
            <div>
                <input type="text" className='h-8 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center' />
            </div>
            <div>
                <span className="cursor-pointer text-white hover:text-[var(--main)]"><FaUserCircle size={40} /></span>
            </div>

        </div>
    )
}
export default NavBarItens