import { PessoaData } from "./PessoaData";

export interface ObjetoPaginado {
    totalItems: number,
    totalPaginas: number,
    paginaAtual: number,
    pessoas: PessoaData[] 
}