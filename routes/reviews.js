import express from 'express'
import { createReview } from '../controllers/reviewController.js'
import { verifyUser } from '../utils/verifyToken.js'
const reuter = express.Router()

reuter 
.post('/:tourId',verifyUser,createReview)

  
export default reuter  