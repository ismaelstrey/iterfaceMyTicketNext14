export interface TiketTypes {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  problema_informado?: string;
  observacao?: string;
  created_at?: Date;
  updated_at?: Date;
  status: Status;
  prioridade?: Prioridade;
  empresa?: number | null;
  categoria?: number | null;
  tecnico?: number | null;
  tecnicoId?: number;
  empresaId?: number;
  categoriaId?: number;
}
export enum Status {
  ABERTO = "ABERTO",
  INICIADO = "INICIADO",
  PAUSADO = "PAUSADO",
  CONCLUIDO = "CONCLUIDO",
  CANCELADO = "CANCELADO",
}

export enum Prioridade {
  ALTA = "ALTA",
  MEDIA = "MEDIA",
  BAIXA = "BAIXA",
  PLANEJADA = "PLANEJADA",
  CRITICA = "CRITICA",
}
