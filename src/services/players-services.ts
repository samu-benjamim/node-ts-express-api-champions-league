import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
import * as PlayerRepostory from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"


export const getAllPlayers = async () => {
    const data = await PlayerRepostory.findAllPlayers()
    let response = null
    
    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response
}


export const getPlayerById = async (id:number) => {
    const data = await PlayerRepostory.findPlayersById(id)
    let response = null
    
    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response

} 

export const postCreatePlayer = async (player: PlayerModel) => {
    let response = null
     if (Object.keys(player).length !== 0) {
        await PlayerRepostory.insertPlayer(player)
        response = await HttpResponse.created()
    } else {
        response = await HttpResponse.noContent()
    }

    return response

} 

export const deletePlayerById = async (id:number) => {
    let response = null
    let status = await PlayerRepostory.deletePlayer(id)
    if (status){
        response = await HttpResponse.ok( {message: "deleted"})
    }else {
        response = await HttpResponse.BadRequest()
    }
    return response

} 

export const updatePlayerById = async (id:number, statistics:StatisticsModel) => {

    let response = null
    const data = await PlayerRepostory.findAndModifyPlayer(id, statistics)
    if (Object.keys(data).length === 0){
        response = await HttpResponse.BadRequest()
    }else {
        response = await HttpResponse.ok(data)
    }

    return response

} 