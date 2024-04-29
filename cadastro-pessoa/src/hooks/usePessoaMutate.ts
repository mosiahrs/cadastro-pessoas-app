import axios, { AxiosPromise } from "axios";
import { PessoaData } from "../model/PessoaData";
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'http://localhost:8080'

const postData = async (data: PessoaData): AxiosPromise<any> => {
  const response = axios.post(API_URL + '/v1/api/pessoas', data);
  return response;
}

export function usePessoaMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
    mutationFn: postData,
    retry: 1,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pessoa-paginacao'] });
    },
    })  
    
  return mutate;
}