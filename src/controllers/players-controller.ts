import {Response, Request, response} from "express"
import { deletePlayerById, getAllPlayers, getPlayerById, postCreatePlayer, updatePlayerById } from "../services/players-services";
import { BadRequest} from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";
    
export const getPlayers =  async (req:Request, res:Response) => {
    const httpResponse = await getAllPlayers()
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayer =  async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await getPlayerById(id)
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer =  async (req:Request, res:Response) => {
    const bodyValue = req.body
    const httpResponse = await postCreatePlayer(bodyValue)
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }  else {
        const response = await BadRequest();
        res.status(response.statusCode).json(response.body);
    }
}

export const deletePlayer =  async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerById(id)
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer =  async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: StatisticsModel = req.body
    const httpResponse = await updatePlayerById(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body);
}