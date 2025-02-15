import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import loginRoute from './src/routes/loginRoute.js';
import cookieParser from 'cookie-parser';
import mongo from './src/config/mongo.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(mongo);


app.use('/user', loginRoute);

export default app; 
