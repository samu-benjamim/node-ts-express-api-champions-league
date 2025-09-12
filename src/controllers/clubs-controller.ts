import {Response, Request} from "express"
import { getClubsById, getClubsServices } from "../services/clubs-services"

export const getClubs = async (req: Request, res: Response) => {
    const response = await getClubsServices()
    res.status(response.statusCode).json(response.body);
}
export const getClub = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const response = await getClubsById(id)
    res.status(response.statusCode).json(response.body);
}
