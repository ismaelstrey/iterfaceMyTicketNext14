


export function drop(event: React.DragEvent<HTMLDivElement>, title: string) {
    event.preventDefault();

    console.log({ "ticket_status_destino": title });


}

export async function drag(event: React.DragEvent<HTMLDivElement | any>, title: string): Promise<{ id: number; title: string }> {
    // Usar a propriedade 'dataset' para acessar 'data-*' attributes em elementos HTML
    //@ts-ignore
    const id = parseInt(event.target.accessKey, 10);


    if (!isNaN(id)) {
        // Retornar um objeto com as propriedades 'id' e 'title'
        return { id, title };
    } else {
        // Se o 'data-id' não for um número válido, pode lançar um erro ou retornar um valor padrão, dependendo do requisito
        throw new Error("ID inválido");
    }
}