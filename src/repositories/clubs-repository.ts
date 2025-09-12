import { ClubModel } from "../models/clubs-model";
import fs from "fs/promises"
import path from "path";


export const findAllClubs = async(): Promise<ClubModel[]> => {
    const database = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(database)
    return clubs
} 

export const findClubsById = async(id: number): Promise<ClubModel | undefined> => {
    const database = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(database)
    const data = clubs.find((club) => club.id === id)
    return data
}
