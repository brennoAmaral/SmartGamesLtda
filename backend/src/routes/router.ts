import { Request, Response, Router } from "express";
import {GamesController} from '../controller'
import { StorageController } from "../controller/storage";
import { SellController } from "../controller/sell";

const router = Router();

router.get("/api/games/:filter", GamesController.getListAll)

router.get("/api/games/getById/:id", GamesController.getGameById)

router.put("/api/sell/storage/:idGame/:idStore/:quantity/:idPlatform/:price", StorageController.managementStorage)

router.put("/api/sell/:idGame/:idStore/:quantity/:idPlatform/:price/:shipMethod/:discount", SellController.createSell)




export default router