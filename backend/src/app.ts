import express  from "express";
import cors from 'cors';

import userRouter from './routes/studentRouter'
import teacherRouter from './routes/teacherRouter'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json())

app.use('/student',userRouter)
app.use('/teacher',teacherRouter)

export default app