import customError from "../customErrors/CustomError.js";
import { getTicket, updateTicket, createTicket, deleteTicket, buyTicket,getTicketsPerUser, getAllTickets } from "../models/ticket.js";

export async function getTicketController(req, res, next) {

    const { id } = req.params;

    try {
        const result = await getTicket(id);
        return result;
    }
    catch (err) {
        console.log("erro com json: " + err);
        next(new customError(400, err.message));
    }
}
export async function getAllTicketController(req, res, next) {

    try {
        const result = await getAllTickets();
        return result;
    }
    catch (err) {
        console.log("erro com json: " + err)
       next(new customError(400,err.message));
    }
}

export async function createTicketController(req, res, next) {
    const { name, price, quantity } = req.body;

    try {
        const result = await createTicket(name, price, quantity);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
}

export async function updateTicketController(req, res) {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    try {
        const result = await updateTicket(id, name, price, quantity);
        res.status(200).json(result);
    }
    catch (err) {
        next(new customError(400,err.message ));
    }
}

export async function deleteTicketController(req, res, next) {

    const { id } = req.params;

    try {
        const result = await deleteTicket(id);
        res.status(200).json(result);
    }
    catch (err) {
        next( new customError(400,err.message));
    }
}

export async function buyTicketController(req, res, next) {
    const { idTicket } = req.params;
    const idUser = req.user.id;

    try {
        const result = await buyTicket(idUser, idTicket);
        return result;
    }
    catch (err) {
        next(new customError(400, err.message));
    }
}

export async function getTicketsPerUserControler(req, res, next){
    const id  = req.user.id;

    try{

        const result = await getTicketsPerUser(id);
        const ticktsObject = result.map((i)=>( {name: i.name, id: i._id, quantity: i.count }) );
        return(ticktsObject);

    }
    catch (err) {
        next(new customError(400,err.message));
    }
}
