import express from "express";

import {categoryController, createCategoryController,  deleteCategoryController,  singleCategoryController,  updateCategoryController } from '../controllers/categoryController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router();


// routes

//create category
router.post("/create-category",requireSignIn,isAdmin,createCategoryController);


//update category
router.put("/update-category/:id",requireSignIn, isAdmin, updateCategoryController);

//getAll category 
router.get('/get-category', categoryController)

//single Category

router.get('/single-category/:slug',singleCategoryController)

//delete cat

router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)


export default router;