"use client"
import { TicketContext } from "@/app/context/TicketContext"
import { useContext } from "react"

const NovoTicket = () => {
    const { ticket, handleToggleTicket } = useContext(TicketContext);


    return (
        ticket && <div className="flex gap-3 flex-col w-screen h-screen fixed justify-center content-center items-center bg-opacity-30 backdrop-blur-sm z-40 transition-all duration-1000">
            <div className="flex bg-sub-menu p-20 rounded-lg border-2 border-solid border-white relative flex-col gap-4 w-40vw]">
                <span className="text-white text-lg text-center"><h2>Novo Ticket</h2></span>
                <label htmlFor="name" className="text-white">Nome</label>
                <input id="nome" type="text" className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center" />
                <label htmlFor="email" className="text-white">Cliente</label>
                <input type="text" id="cliente" className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center" />
                <label htmlFor="tipo" className="text-white">Tipo</label>
                <input type="text" name="tipo" className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center" />
                <div className="flex flex-row-reverse gap-4">
                    <button className="h-10 min-w-[15rem] rounded-xl border-solid border-2 mt-20 border-white outline-none bg-sub-menu text-white text-center hover:bg-green-500">Salvar</button>
                    <button onClick={() => handleToggleTicket && handleToggleTicket()} className="h-10 min-w-[15rem] bg-red-500 hover:bg-black rounded-xl border-solid border-2 mt-20 border-white outline-none text-white text-center">Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default NovoTicket