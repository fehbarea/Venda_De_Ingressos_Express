import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import loginRoute from './src/routes/loginRoute.js';
import ticketRoute from './src/routes/ticketModel.js';
import cookieParser from 'cookie-parser';
import mongo from './src/config/mongo.js'
import errorHandler from './src/middleware/errorHandler.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(mongo);
app.use(errorHandler)


app.use('/user', loginRoute);

app.use('/ticket',ticketRoute );

export default app; 
