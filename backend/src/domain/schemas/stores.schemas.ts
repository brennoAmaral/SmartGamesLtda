import {number, string, Schema, object} from 'yup'
import { IGamesStoreResponseDTO } from '../../dtos/gamesStores.dto'

export const storesValidation: Schema<IGamesStoreResponseDTO> = object({
  idStore: number().min(1).required(),
  linkMap: string().url().required(),
  quantity: number().min(0).required(),
  price:  number().min(0).required(),
  nameStore: string().min(1).required(),
  adress: string().min(1).required(),
}) 

