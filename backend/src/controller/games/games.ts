import { Request, Response } from "express";
import * as yup from "yup"
import GamesModel from "../../model/games.model";
import dataBaseEngine from "../../infra/mysql"
import DomainValidate from "../../domain/games.domain";
import { Schemas } from "../../domain/schemas";
import { IRequestFilterDTO, IRequestGetByIdDTO,  } from "../../dtos/generics.dto";


export async function getListAll(request: Request<IRequestFilterDTO>, response: Response<any | yup.ValidationError['message']>) {
  const result = await GamesModel(dataBaseEngine).getAll(request.params.filter)
  await DomainValidate.getAll(result, Schemas.gameListValidation) 
  response.json(result) 
}

export async function getGameById(request: Request<IRequestGetByIdDTO>, response: Response<any | yup.ValidationError['message']>) {
  const validateId = await DomainValidate.id(request.params)
  if(validateId){
    response.status(400).json(validateId)
    return
  }
  
  const result = await GamesModel(dataBaseEngine).getById(request.params.id)

  const validateGame = await DomainValidate.gameGetByIdResponse(result)

  if(validateGame){
    response.status(404).json(validateGame)
    return
  }

  response.json(result) 
}

