import { atualizar } from "../utils/api/api";

type MeuTipo = {
  id: number;
  title: string;
  prioridade: string;
  type: string;
  subTitle: string;
  description: string;
};

export const atualizarTicket = async (
  id_item: number,
  type: string,
  apiTicket: MeuTipo[]
) => {
  // Procura o índice do objeto com id igual a 2
  const filtra = apiTicket.filter((ticket) => ticket.id == id_item);
  // Atualizar(id, filtra)

  const { id, ...novo } = filtra[0];
  novo.type = type;

  const resposta = await atualizar(id, novo);
  return resposta;

  // Verifica se o objeto com id igual a 2 foi encontrado
};
