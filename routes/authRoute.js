import  express  from "express";
import {forgotPasswordController, getAllOrdersController, getOrdersController, orderStatusController, registerController, updateProfileController} from '../controllers/authController.js'
import { loginController } from "../controllers/authController.js";
import { testController } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()
//routing
//REGISTER || METHOD POST
router.post('/register',registerController)
//LOGIN || POST
router.post('/login',loginController)

//test  routes
router.get('/test',requireSignIn,isAdmin,testController)

//protected routes
router.get('/user-auth',requireSignIn , (req,res)=> {
      res.status(200).send({ok:true});
})

//forgot password
router.post('/forgot-password',forgotPasswordController)
//protected route auth
router.get('/admin-auth',requireSignIn ,isAdmin, (req,res)=> {
      res.status(200).send({ok:true});

})

//update profile
router.put('/profile',requireSignIn,updateProfileController)

//auth routes
router.get('/orders', requireSignIn,getOrdersController)

router.get('/all-orders', requireSignIn,isAdmin,getAllOrdersController)

router.get('/order-status', requireSignIn,isAdmin,orderStatusController)
export default router;

