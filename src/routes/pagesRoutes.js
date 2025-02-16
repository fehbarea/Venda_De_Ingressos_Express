import { Router } from 'express'
import { homePage, loginPage, boughtPage, ticketPage } from '../controllers/pagesController.js';
import { authenticatedToken, isAdmin } from '../middleware/verifyAuthenticationMiddleware.js'

const router = Router();

router.get('/login', loginPage)

router.get('/home', authenticatedToken, homePage);

router.get('/bought', authenticatedToken, boughtPage );

router.get('/ticket/:id', authenticatedToken, ticketPage);


export default router; 