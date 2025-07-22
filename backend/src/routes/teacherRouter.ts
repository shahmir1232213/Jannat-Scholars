import express,{Request,Response}  from "express";
import {register,fetch} from '../controllers/teacherController'

const teacherRouter = express.Router();

teacherRouter.post('/register',register)
teacherRouter.get('/fetch',fetch)

export default teacherRouter
