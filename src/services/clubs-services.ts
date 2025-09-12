import { findAllClubs, findClubsById } from "../repositories/clubs-repository"
import * as HttpResponse from "../utils/http-helper"


export const getClubsServices = async () => {
    const data = await findAllClubs()
    
    const response = HttpResponse.ok(data)
    return response
}

export const getClubsById = async (id: number) => {
    const data = await findClubsById(id)
    
    const response = HttpResponse.ok(data)
    return response
}