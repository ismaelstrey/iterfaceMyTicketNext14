import { json } from "stream/consumers";
import { Atualizar } from "../utils/api/api";

type MeuTipo = {
    id: number;
    title: string;
    prioridade: string;
    type: string;
    subTitle: string;
    description: string;
};

export function alterarTipoPorId(lista: MeuTipo[], idAlvo: number, tipo: string): MeuTipo[] {
    // Clonar a lista para evitar a modificação da original

    const novaLista = lista.map(objeto => ({ ...objeto }));

    // Encontrar o objeto com o ID desejado e alterar a propriedade 'type' para 'Concluido'
    const objetoAlvoIndex = novaLista.findIndex(objeto => objeto.id === idAlvo);
    console.log(objetoAlvoIndex)
    if (objetoAlvoIndex !== -1) {
        novaLista[objetoAlvoIndex].type = tipo;
    }

    return novaLista;
}

export function atualizarTicket(id_item: number, type: string, apiTicket: MeuTipo[]) {

    // Procura o índice do objeto com id igual a 2
    const filtra = apiTicket.filter(ticket => ticket.id == id_item);
    // Atualizar(id, filtra)

    const { id, ...novo } = filtra[0]

    Atualizar(id, novo)


    const index = apiTicket.findIndex(ticket => ticket.id == id_item);

    // Verifica se o objeto com id igual a 2 foi encontrado

    if (index !== -1) {
        // Atualiza a descrição do objeto com id igual a 2
        apiTicket[index].type = type;
        return apiTicket

    } else {

        console.log(`Objeto com id ${id_item} não encontrado.`);
    }
}