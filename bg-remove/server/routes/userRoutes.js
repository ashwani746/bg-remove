import express from 'express'
import { clerkWebbhooks } from '../controllers/UserController.js'

const  userRouter = express.Router()

userRouter.post('/webhooks',clerkWebbhooks)

export default userRouter