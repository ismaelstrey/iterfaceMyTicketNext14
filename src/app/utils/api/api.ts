import axios from "axios";
import Versao from "../../../../package.json";
export const { version } = Versao;

export const apiTicket = [
  {
    id: 1,
    title: "Sem internet",
    prioridade: "critico",
    type: "Aberto",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
  {
    id: 2,
    title: "Sem internet",
    prioridade: "alto",
    type: "Iniciado",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
  {
    id: 3,
    title: "Sem internet",
    prioridade: "medio",
    type: "Pausado",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
  {
    id: 4,
    title: "Sem internet",
    prioridade: "baixo",
    type: "Concluido",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
  {
    id: 5,
    title: "Sem internet",
    prioridade: "planejado",
    type: "Concluido",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
  {
    id: 6,
    title: "Sem internet",
    prioridade: "planejado",
    type: "Concluido",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
  {
    id: 7,
    title: "Sem internet",
    prioridade: "planejado",
    type: "Concluido",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
  {
    id: 8,
    title: "Sem internet",
    prioridade: "planejado",
    type: "Concluido",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
  {
    id: 9,
    title: "Sem internet",
    prioridade: "planejado",
    type: "Concluido",
    subTitle: "OI-Internet",
    description:
      "O cliente estava viajando para a cidade da praia e cabou a gazolina no carro pois o carro gatasva muito",
  },
];
interface ApiticketProps {
  id: number;
  title: string;
  prioridade: string;
  type: string;
  subTitle: string;
  description: string;
}

export const TYPE = ["Aberto", "Iniciado", "Pausado", "Concluido"];
export const TYPE_RPIORIDADE = [
  "baixo",
  "medio",
  "alto",
  "planejado",
  "critico",
];
export const tiketApi = async (): Promise<ApiticketProps[]> => {
  let data = await axios.get(`http://localhost:3001/tiket`, {});

  return data.data;
};

export const atualizar = async ({
  id,
  title,
  prioridade,
  type,
  subTitle,
  description,
}: ApiticketProps): Promise<ApiticketProps[]> => {
  try {
    const response = await axios.patch(`http://localhost:3001/tiket/${id}`, {
      title,
      prioridade,
      type,
      subTitle,
      description,
    });

    return response.data;
  } catch (error) {
    // Trate os erros conforme necessário
    console.error("Erro ao atualizar o ticket:", error);
    throw error; // Pode querer relançar o erro para que quem chama possa tratá-lo também
  }
};
