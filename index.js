import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import { DbConfigs } from './src/Configs/DbConfigs.js';
import userRouter from './src/Routers/UserRouter.js';
// import multer from "multer";
// import path from 'path'
// import {fileURLToPath} from 'url'
import cors from 'cors'

const app=express();
app.use(cors())



 app.use(express.json())
app.use(express.static('images'))
DbConfigs();
app.use(userRouter)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 






app.listen(process.env.SERVER_PORT,()=>{
    console.log(`server is running at ${process.env.SERVER_PORT}`)
})



