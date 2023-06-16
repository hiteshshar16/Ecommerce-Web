import express from "express";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/CategoryController.js";
import  { requireSignIn, isAdmin } from './../middlewares/authMiddlewares.js'

const router = express.Router()


//Routes

//create category 
router.post('/create-category',requireSignIn, isAdmin, createCategoryController )

//update category
router.put('/update-category/:id',requireSignIn, isAdmin, updateCategoryController )

//get all category 
router.get('/get-category',categoryController)

//get single category
router.get('/single-category/:slug',singleCategoryController)

//delete category 
router.delete('/delete-category/:id',requireSignIn, isAdmin, deleteCategoryController )


export default router