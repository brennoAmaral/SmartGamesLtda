import {Schema, object, array, number, string} from 'yup'
import IGameDTO from '../../dtos/games.dto'
import IGamesResponseDTO from '../../dtos/gameResponse.dto'
import { platformValidation } from './platforms.schema'
import { storesValidation } from './stores.schemas'

export const gameValidation: Schema<IGamesResponseDTO> = object({
  idGame: number().min(1).required(),
  nameGame: string().min(1).required(),
  description: string().min(1).required(),
  linkImage: string().min(1).required(),
  platforms: array().of(platformValidation).required(),
  stores: array().of(storesValidation).required()
}).required('game not found')

export const gameListValidation: Schema<IGameDTO[]> = array().of(gameValidation).required('games not found')
