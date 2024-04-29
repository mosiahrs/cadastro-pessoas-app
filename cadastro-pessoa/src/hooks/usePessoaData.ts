import axios from "axios"
import { useQuery } from '@tanstack/react-query';
import { ObjetoPaginado } from "../model/ObjetoPaginado";

const API_URL = 'http://localhost:8080'

const urlParams = new URLSearchParams();


const fetchDaAta = async(page:number, size: number): Promise<ObjetoPaginado> => {

  urlParams.set('page', page.toString())
  urlParams.set('size', size.toString())

  const response = await axios.get(API_URL + '/v1/api/pessoas?' + urlParams.toString());
  return response.data as ObjetoPaginado;
}

export function usePessoaData(page: number, size: number) {
  const query = useQuery({ 
      queryKey: ['pessoa-paginacao'], 
      queryFn: () => fetchDaAta(page, size),
      retry: 2
    })

  return {
    ...query,
    data: query.data
  }
}