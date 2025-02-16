import { Router } from 'express'
import { homePage, loginPage } from '../controllers/pagesController.js';
import { authenticatedToken, isAdmin } from '../middleware/verifyAuthenticationMiddleware.js'

const router = Router();

router.get('/login', loginPage)

router.get('/home', authenticatedToken, homePage);


export default router; 