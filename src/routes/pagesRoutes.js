import { Router } from 'express'
import { homePage, loginPage, boughtPage, ticketPage, buyTicketPage, buyNewTicketPage, registerPage } from '../controllers/pagesController.js';
import { authenticatedToken } from '../middleware/verifyAuthenticationMiddleware.js'

const router = Router();

router.get('/login', loginPage)

router.get('/home', authenticatedToken, homePage);

router.get('/bought', authenticatedToken, boughtPage );

router.get('/ticket/:id', authenticatedToken, ticketPage);

router.get('/buy', authenticatedToken, buyTicketPage)

router.get('/buyNew/:idTicket', authenticatedToken, buyNewTicketPage);

router.get('/register', registerPage);


export default router; 