import { ReactNode } from "react";
import { HiTicket } from "react-icons/hi2";
import { Status, TiketTypes } from "../@types/tiketTypes";
export function limitarTexto(texto: string, limite = 70): string {
  if (texto.length > limite) {
    return texto.substring(0, limite) + " ..."; // Retorna os primeiros 150 caracteres
  } else {
    return texto; // Retorna o texto original se for menor que 150 caracteres
  }
}

export const colorType = (tipo: string): string => {
  switch (tipo) {
    case "Aberto":
      return "bg-red-500";

    case "Iniciado":
      return "bg-blue-500";

    case "Pausado":
      return "bg-yellow-500";

    case "Concluido":
      return "bg-green-500";

    default:
      return "";
  }
};
export const IconType = (tipo: string): ReactNode => {
  switch (tipo) {
    case "Aberto":
      return <HiTicket size={40} color="#ef4444" className="rotate-180" />;

    case "Iniciado":
      return <HiTicket size={40} className="rotate-180" color="#3b82f6" />;

    case "Pausado":
      return <HiTicket size={40} className="rotate-180" color="#eab308" />;

    case "Concluido":
      return <HiTicket size={40} className="rotate-180" color="#22c55e" />;

    default:
      return "";
  }
};
export const colorPrioridade = (prioridade: string): string => {
  switch (prioridade) {
    case "critico":
      return "bg-red-500";

    case "alto":
      return "bg-blue-500";

    case "medio":
      return "bg-yellow-500";

    case "baixo":
      return "bg-green-500";

    case "planejado":
      return "bg-purple-500";

    default:
      return "";
  }
};

export const filtraTiketPorId = async (id: number, lista: TiketTypes[]): Promise<TiketTypes> => {


  const data = lista.filter((list) => list.id == id)
  console.log(data)
  return data[0];
};

export function mapStatusEnumToValues(statusEnum: typeof Status): string[] {
  return Object.values(statusEnum);
}
