import express from 'express'
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from '../controllers/productController.js'
import {isAdmin, requireSignIn} from '../middlewares/authMiddlewares.js'
import formidable from 'express-formidable'
const router = express.Router()


//routes

//create product || POST
router.post('/create-product',requireSignIn,isAdmin, formidable(), createProductController)

//Update product || POST
router.put('/update-product/:pid',requireSignIn,isAdmin, formidable(), updateProductController)


// get all product 
router.get("/get-product", getProductController)

//single Product
router.get("/get-product/:slug", getSingleProductController)

//get photo 
router.get("/product-photo/:pid", productPhotoController)

//delete Product
router.delete('/delete-product/:pid',deleteProductController)

// Filter Products
router.post('/product-filter',productFilterController)

//product count
router.get("/product-count", productCountController);

// product per page 
router.get('/product-list/:page', productListController)

//search product
router.get('/search',searchProductController)

// Similar product
router.get('/related-product/:pid/:cid',realtedProductController)

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get('/braintree/token',braintreeTokenController )

//payments
router.post('/braintree/payment', requireSignIn ,brainTreePaymentController)

export default router