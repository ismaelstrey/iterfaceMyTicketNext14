export interface EmpresaType {
    id: number;
    nome: string;
    cnpj: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    telefone?: string | null;
    email?: string | null;
    dataFundacao?: Date | null;
    tipoEmpresa?: string | null;
    ramoAtividade?: string | null;
    responsavelLegal?: string | null;
    capitalSocial?: number | null;
    situacaoTributaria?: string | null;
    informacoesAdicionais?: string | null;
    user: User[];
    tecnico: Tecnico[];
    tiket: Tiket[];
    cliente?: Cliente | null;
    empresa_tipo?: EmpresaTipo | null;
    empresaTipoId?: number | null;
    clienteId?: number | null;
    created_at: Date;
    updated_at?: Date | null;
}

interface User {
    // Defina a interface para a entidade User, se necessário
}

interface Tecnico {
    // Defina a interface para a entidade Tecnico, se necessário
}

interface Tiket {
    // Defina a interface para a entidade Tiket, se necessário
}

interface Cliente {
    // Defina a interface para a entidade Cliente, se necessário
}

interface EmpresaTipo {
    // Defina a interface para a entidade EmpresaTipo, se necessário
}