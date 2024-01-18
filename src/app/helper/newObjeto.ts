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
    console.log(idAlvo)
    const novaLista = lista.map(objeto => ({ ...objeto }));

    // Encontrar o objeto com o ID desejado e alterar a propriedade 'type' para 'Concluido'
    const objetoAlvoIndex = novaLista.findIndex(objeto => objeto.id === idAlvo);
    if (objetoAlvoIndex !== -1) {
        novaLista[objetoAlvoIndex].type = tipo;
    }

    return novaLista;
}