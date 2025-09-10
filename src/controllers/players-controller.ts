import {Response, Request} from "express"
import { getPlayerService } from "../services/players-services";
    
export const getPlayer =  async (req:Request, res:Response) => {
    const httpResponse = await getPlayerService()
    res.status(httpResponse.statusCode).json(httpResponse.body);
}