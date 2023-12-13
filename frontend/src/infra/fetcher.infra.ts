import { AxiosResponse } from 'axios';
import axiosInstance from './api.infra'

export default async function fetcher<T>(url: string): Promise<T> {
  const response: AxiosResponse<T> = await axiosInstance.get(`${url}`);

  if (response.status !== 200) {
    throw new Error('Erro ao buscar os dados');
  }

  return response.data;
}