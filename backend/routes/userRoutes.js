import express from "express"
import { authUser } from "../controllers/userConrtroller.js"
const router = express.Router()

router.post('/auth', authUser, (req, res) => {
    res.send('Auth user')
})

export default router;