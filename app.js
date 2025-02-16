import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import loginRoute from './src/routes/loginRoute.js';
import ticketRoute from './src/routes/ticketModel.js';
import cookieParser from 'cookie-parser';
import mongo from './src/config/mongo.js'
import errorHandler from './src/middleware/errorHandler.js'
import mustacheExpress from 'mustache-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import pagesRoutes from './src/routes/pagesRoutes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const engine = mustacheExpress();

app.engine('mustache', engine);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(mongo);
app.use(errorHandler);

app.set("views", path.join(__dirname, 'src', 'views'));
app.set('view engine', 'mustache');


app.use('/user', loginRoute);

app.use('/ticket',ticketRoute );

app.use('/page', pagesRoutes);

export default app; 
