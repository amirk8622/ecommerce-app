import express from 'express';
import {isAdmin,requireSignIn} from './../middlewares/authMiddleware.js';
import {categoryController, createcategoryController, deletecategoryController, singleCategoryController, updateCategoryController} from '../controllers/categoryController.js';
const router = express.Router()

//create category
router.post('/create-category',requireSignIn,isAdmin,categoryController);
//update category

router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController);
//getAll category

router.get('/get-category',createcategoryController)
//single category

router.get('/single-category/:slug',singleCategoryController);
//delete category

router.delete('/delete-category/:id',requireSignIn,isAdmin,deletecategoryController)
export default router;