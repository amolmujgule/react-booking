import express from 'express'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
const reuter = express.Router()

reuter 
.post('/',verifyUser,createBooking)
.get('/:id',verifyUser,getBooking)
.get('/',verifyAdmin,getAllBooking)


export default reuter  