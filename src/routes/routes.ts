import { Router } from "express"
import { deletePlayer, getPlayer, getPlayers, postPlayer, updatePlayer } from "../controllers/players-controller"


const router = Router()

router.get("/players", getPlayers)
router.get("/players/:id", getPlayer)
router.post("/players", postPlayer)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayer)


export default router