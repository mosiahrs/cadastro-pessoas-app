import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = import.meta.env.BASE_URL

const deleteData = async (id: number): AxiosPromise<any> => {
  const response = axios.delete(API_URL + '/v1/api/contatos/' + id);
  return response;
}

export function useContatoDeleteMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pessoa-paginacao'] });
    },
    })  
    
  return mutate;
}