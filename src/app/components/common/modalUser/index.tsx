"use client"
import { useState } from "react"

interface ModalUserProps {
    show?: boolean
}
const ModalUser = ({ show = false }: ModalUserProps) => {


    const [showModal, setShowModal] = useState(show)


    return (
        showModal && <div className="flex gap-3 flex-col w-screen h-screen fixed justify-center content-center items-center bg-opacity-30 backdrop-blur-sm z-40">
            <div className="flex relative flex-col gap-4 w-40vw]">
                <label htmlFor="name" className="text-white">Nome compreto</label>
                <input id="name" type="text" className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center" />
                <label htmlFor="email" className="text-white">Email</label>
                <input type="text" id="email" className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center" />
                <label htmlFor="senha" className="text-white">Senha</label>
                <input type="password" name="senha" className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center" />
                <label htmlFor="re-senha" className="text-white">Repita Senha</label>
                <input type="password" name="re-senha" className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center" />
                <div className="flex flex-row-reverse gap-4">
                    <button className="h-10 min-w-[15rem] rounded-xl border-solid border-2 mt-20 border-white outline-none bg-sub-menu text-white text-center hover:bg-green-500">Salvar</button>
                    <button className="h-10 min-w-[15rem] bg-red-500 hover:bg-black rounded-xl border-solid border-2 mt-20 border-white outline-none text-white text-center">Cancelar</button>

                </div>
            </div>
        </div>
    )
}

export default ModalUser