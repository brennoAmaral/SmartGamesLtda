import {number, Schema, object} from 'yup'
import { IRequestGetByIdDTO } from '../dtos/generics.dto'

export const idValidation: Schema<IRequestGetByIdDTO> =  object().shape({
  id: number().min(1).required()
})