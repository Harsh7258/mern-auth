import express from "express"
import { authUser, signupUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/userConrtroller.js"
import { protect } from "../middlewares/authMiddlewares.js"
const router = express.Router()

router.post('/auth', authUser, (req, res) => {
    res.send('loggin user')
})
router.post('/', signupUser, (req, res) => {
    res.send('new user')
})
router.post('/logout', logoutUser, (req, res) => {
    res.send('logout user')
})
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)


export default router;