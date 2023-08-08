 import  express  from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

 const router = express.Router()

 router
 //create new tour

 .post("/",verifyAdmin,createTour)

 //update  tour
 .put("/:id",verifyAdmin,updateTour)

 //delete  tour
 .delete("/:id",verifyAdmin,deleteTour)

 //get single tour
 .get("/:id",getSingleTour)

 //get All tour
 .get("/",getAllTour)
 

 //get tour by search
 .get("/search/getTourBySearch",getTourBySearch)
 //get tour by  featured
 .get("/search/getFeaturedTour",getFeaturedTour)
 .get("/search/getTourCount",getTourCount)
 export default router