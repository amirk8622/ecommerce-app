import express from "express";
import {braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getsingleproductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );
//routes
router.get('/get-product',getProductController);
//single-product
router.get('/get-product/:slug',getsingleproductController);
//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
//filter product
router.post('/product-filters',productFiltersController) 

//product count
router.get('/product-count',productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search-product

router.get('/search/:keyword',searchProductController)

//similar prod
router.get('/related-product/:pid/:cid',relatedProductController)
//category wise

router.get('/product-category/:slug',productCategoryController)

//payment token

router.get('/braintree/token',braintreeTokenController)

//payment

router.post('/braintree/payment',requireSignIn,braintreePaymentController)
export default router;