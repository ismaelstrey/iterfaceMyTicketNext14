"use client";
import { TicketContext } from "@/app/context/TicketContext";
import { colorPrioridade, mapPrioridadeEnumToValues } from "@/app/helper/helper";
import { TYPE_RPIORIDADE, novoTicket } from "@/app/utils/api/api";
import { FormEvent, useContext, useState } from "react";

const NovoTicket = () => {
  const { ticket, toggleTicket } = useContext(TicketContext);
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [description, setDescription] = useState("")
  const [empresaId, setEmpresaId] = useState("")
  const [prioridade, setPrioridade] = useState(TYPE_RPIORIDADE.BAIXA)
  const typePrioridade = mapPrioridadeEnumToValues(TYPE_RPIORIDADE)
  const handleForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log({
      title,
      prioridade,
      subTitle,
      empresaId,
      description
    })
    try {

      novoTicket(
        {
          title,
          prioridade,
          subTitle,
          //@ts-ignore
          empresaId,
          description
        }
      )
    } catch (error) {
      console.log(error)

    }


  }


  const RenderOptions = () =>
    typePrioridade.map((item, key) => {
      const option = (
        <option key={key} className={colorPrioridade(item)} value={item} defaultValue={TYPE_RPIORIDADE.MEDIA}>
          {item}
        </option>
      );

      return option;
    });

  return (
    ticket && (
      <div className="flex gap-3 flex-col w-screen h-screen fixed justify-center content-center items-center bg-opacity-30 backdrop-blur-sm z-40 transition-all duration-1000">
        <div className="flex bg-sub-menu p-20 rounded-lg border-2 border-solid border-white relative flex-col gap-4 w-40vw]">
          <form onSubmit={(e) => handleForm(e)} className="flex flex-col">
            <span className="text-white text-lg text-center">

            </span>
            <label htmlFor="title" className="text-white">
              Title: {title}
            </label>
            <input
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center"
            />
            <label htmlFor="subtitle" className="text-white">
              Subtitle: {subTitle}
            </label>
            <input
              id="subtitle"
              type="text"
              onChange={(e) => setSubTitle(e.target.value)}
              value={subTitle}
              className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center"
            />

            <label htmlFor="description" className="text-white">
              Descrição: {description}
            </label>
            <textarea
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              rows={4}
              className="min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white p-2"
            />

            <label htmlFor="cliente" className="text-white">
              Cliente
            </label>
            <input
              type="text"
              id="cliente"
              onChange={(e) => setEmpresaId(e.target.value)}
              value={empresaId}
              className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center"
            />
            <label htmlFor="prioridade" className="text-white">
              Prioridade: {prioridade}
            </label>
            <select
              name="prioridade"
              id="prioridade"
              value={prioridade}
              //@ts-ignore
              onChange={(e) => setPrioridade(e.target.value)}
              className="h-10 min-w-[15rem] rounded-xl border-solid border-2 border-white outline-none bg-sub-menu text-white text-center"
            >
              <RenderOptions />
            </select>
            <div className="flex flex-row-reverse gap-4">
              <button type="submit" className="h-10 min-w-[15rem] rounded-xl border-solid border-2 mt-20 border-white outline-none bg-sub-menu text-white text-center hover:bg-green-500">
                Salvar
              </button>

              <button
                onClick={() => toggleTicket && toggleTicket()}
                className="h-10 min-w-[15rem] bg-red-500 hover:bg-black rounded-xl border-solid border-2 mt-20 border-white outline-none text-white text-center"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default NovoTicket;
