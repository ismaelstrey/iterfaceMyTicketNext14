import axios from "axios";
import Versao from "../../../../package.json";
import { Prioridade, Status, TiketTypes } from "@/app/@types/tiketTypes";
export const { version } = Versao;

export const TYPE = [Status];
export const TYPE_RPIORIDADE = Prioridade;
export const tiketApi = async (): Promise<TiketTypes[]> => {
  let data = await axios.get(`/api/ticket`, {});
  return data.data;
};

export const atualizar = async ({
  id,
  title,
  prioridade,
  status,
  subTitle,
  description,
}: TiketTypes): Promise<TiketTypes[]> => {
  try {
    const response = await axios.patch(
      `/api/ticket/${id}`,
      {
        title,
        prioridade,
        status,
        subTitle,
        description,
      }
    );

    return response.data;
  } catch (error) {
    // Trate os erros conforme necessário
    console.error("Erro ao atualizar o ticket:", error);
    throw error; // Pode querer relançar o erro para que quem chama possa tratá-lo também
  }
};
export const novoTicket = async ({
  title,
  prioridade,
  status,
  subTitle,
  description,
  categoriaId,
  empresaId,
  tecnicoId,
}: TiketTypes): Promise<TiketTypes[]> => {
  try {
    const response = await axios.post(`/api/ticket`, {
      title,
      prioridade,
      status,
      subTitle,
      description,
      categoriaId,
      empresaId,
      tecnicoId,
    });

    return response.data;
  } catch (error) {
    // Trate os erros conforme necessário
    console.error("Erro ao cadastrar o ticket:", error);
    throw error; // Pode querer relançar o erro para que quem chama possa tratá-lo também
  }
};
