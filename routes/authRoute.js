import express from "express";
import {registerController, loginController, testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register',registerController)

//login || POST
router.post('/login',loginController)


// Forget Password || POST
router.post('/forgot-password', forgotPasswordController)


//test routes dummy
router.get('/test', requireSignIn, isAdmin ,testController)


//protected route auth - user
router.get('/user-auth',requireSignIn, (req, res)=>{
    res.status(200).send({ok:true})
}

)
//protected route auth - Admin
router.get('/admin-auth',requireSignIn, isAdmin, (req, res)=>{
    res.status(200).send({ok:true})
})


//update Profile
router.put('/profile', requireSignIn, updateProfileController)


// orders
router.get('/orders', requireSignIn, getOrdersController)

// all Orders
router.get('/all-orders', requireSignIn,isAdmin , getAllOrdersController)


// order status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);


export default router


