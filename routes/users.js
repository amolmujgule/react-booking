import express  from 'express'
import {  deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'

const reuter = express.Router()
import {verifyAdmin, verifyUser} from '../utils/verifyToken.js'

reuter

//create new User



//update  User
.put("/:id",verifyUser,updateUser)

//delete  User
.delete("/:id",verifyUser,deleteUser)

//get single User
.get("/:id",verifyUser, getSingleUser)

//get All User
.get("/",verifyAdmin,getAllUser)


export default reuter