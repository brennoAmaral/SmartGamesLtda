import { Request, Response } from "express";
import * as yup from "yup"
import GamesModel from "../../model/games.model";
import dataBaseEngine from "../../infra/mysql"
import {  IRequestGetByIdDTO,  } from "../../dtos/generics.dto";
import { ISellsRequest } from "../../dtos/sellsStores.dto";
import GamesStoresModel from "../../model/gamesStores.model";


export async function managementStorage(request: Request<ISellsRequest>, response: Response<yup.ValidationError['message'] | {error:['insufficient stock']} | yup.ValidationError['message']>) {
  

  const [hasGameInStock] = await GamesStoresModel(dataBaseEngine).getCheckStorage(request.params)
  if(!hasGameInStock){
    return {error:['insufficient stock']}
  }

  const setValues = `games_stores.quantity = games_stores.quantity - ${request.params.quantity}`
  const updateOnStorage = await GamesStoresModel(dataBaseEngine).updateById(request.params.idGame, setValues, {...request.params, price: hasGameInStock.price})
  if(!updateOnStorage){
    return {error:['server error on update stock']}
  }
  
  return undefined
}



export async function getGameById(request: Request<IRequestGetByIdDTO>, response: Response<any | yup.ValidationError['message']>) {
  
}

