import axios, { AxiosPromise } from "axios";
import { PessoaData } from "../model/PessoaData";
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL

const putData = async (data: PessoaData): AxiosPromise<any> => {
  const response = axios.put(API_URL + '/v1/api/pessoas', data);
  return response;
}

export function usePessoaUpdateMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
    mutationFn: putData,
    retry: 1,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pessoa-paginacao'] });
    },
    })  
    
  return mutate;
}