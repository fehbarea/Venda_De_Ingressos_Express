import { getTicketController, updateTicketController, createTicketController, deleteTicketController, buyTicketController } from "../controllers/ticketControler.js";
import { Router } from 'express';
import { authenticatedToken, isAdmin } from '../middleware/verifyAuthenticationMiddleware.js'

const router = Router();


router.post('/',authenticatedToken, isAdmin, createTicketController);

router.get('/:id', authenticatedToken, isAdmin, getTicketController);

router.put('/:id', authenticatedToken, isAdmin, updateTicketController);

router.delete('/:id', authenticatedToken, isAdmin, deleteTicketController);

router.patch('/buy',authenticatedToken, buyTicketController)

export default router;
