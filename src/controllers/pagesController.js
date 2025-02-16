
import customError from "../customErrors/CustomError.js";
import { getTicketsPerUserControler, getTicketController, getAllTicketController, buyTicketController } from "./ticketControler.js";
export function loginPage(req, res) {

    res.render('login', { error: null })
}

export function homePage(req, res) {


    const name = req.user.name;
    res.render('home', { name: name });

}

export async function boughtPage(req, res, next) {
    try {
        const result = await getTicketsPerUserControler(req, res, next);
        if (result) {
            res.render('bought', { tickets: result })
             
            }
    }
    catch (err) {
        next(err);
    }
}

export async function ticketPage(req, res, next) {
    try {
        const result = await getTicketController(req, res, next);
        if (result) {
        
            res.render('ticket', result);
        }
    }
    catch (err) {
        next(err);
    }
}

export async function buyTicketPage(req, res, next) {

    try {
        const result = await getAllTicketController(req, res, next);
        if (result) {
            const tickets = result.map((i) => ({ ...i.toObject(), quantityAvailable: i.totalQuantity - i.soldQuantity }))
            
            res.render('buyTicket', { tickets });
        }
    }
    catch (err) {
        next(err);
    }
}

export async function buyNewTicketPage(req, res, next) {
    try {

        
        const result = await buyTicketController(req, res, next);
        if (result) res.render('buyNew');

    } catch (err) {
        next(err);
    }
}

