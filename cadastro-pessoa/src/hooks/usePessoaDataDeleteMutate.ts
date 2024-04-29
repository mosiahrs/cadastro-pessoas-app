import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL

const deleteData = async (id: number): AxiosPromise<any> => {
  const response = axios.delete(API_URL + '/v1/api/pessoas/' + id);
  return response;
}

export function usePessoaDeleteMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
    mutationFn: deleteData,
    retry: 1,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pessoa-paginacao'] });
    },
    })  
    
  return mutate;
}