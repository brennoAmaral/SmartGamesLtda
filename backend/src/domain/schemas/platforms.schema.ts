import {number, string, Schema, object} from 'yup'
import { IPlatformsResponseDTO } from '../../dtos/platforms.dto'


export const platformValidation: Schema<IPlatformsResponseDTO> = object({
  namePlatform: string().min(1).required(),
  idPlatform: number().min(1).required()
}) 
