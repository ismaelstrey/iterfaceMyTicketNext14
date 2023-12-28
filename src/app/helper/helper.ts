export function limitarTexto(texto: string, limite = 70): string {

    if (texto.length > limite) {
        return texto.substring(0, limite) + ' ...'; // Retorna os primeiros 150 caracteres
    } else {
        return texto; // Retorna o texto original se for menor que 150 caracteres
    }
}

export const colorType = (tipo: string): string => {
    switch (tipo) {
        case 'Aberto':
            return 'bg-red-500'

        case 'Iniciado':
            return 'bg-blue-500'

        case 'Pausado':
            return 'bg-yellow-500'

        case 'Concluido':
            return 'bg-green-500'

        default:
            return ''
    }
}