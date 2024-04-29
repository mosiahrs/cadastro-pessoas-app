import { ContatoData } from "./ContatoData"

export interface PessoaData {
    id?: number,
    nome: string,
    cpf: string,
    dataNascimento: string
    listaContatos?: ContatoData[]
}