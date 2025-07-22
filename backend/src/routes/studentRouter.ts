//import userController from '../controllers/userController'
import express,{Request,Response}  from "express";
import {register,fetch} from '../controllers/studentController'
const studentRouter = express.Router();

studentRouter.post('/register',register)
studentRouter.get('/fetch',fetch)

export default studentRouter;
