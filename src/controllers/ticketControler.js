import { getTicket, updateTicket, createTicket, deleteTicket } from "../models/ticket.js";

export async function getTicketController(req, res) {
  
    const { id } = req.params;

    try{
        const result = await getTicket(id);
        res.status(200).json(result);
    }
    catch (err){
        console.log("erro com json: " + err)
        res.status(400).send({ error: err.message });
    }
}

export async function createTicketController(req, res) {
    const { name, price, quantity } = req.body;

    try{
        const result = await createTicket(name, price, quantity);
        res.status(200).json(result);
    }
    catch (err){
        res.status(400).send({ error: err.message });
    }
}

export async function updateTicketController(req, res) {
    const { id } = req.params;
    const {name, price, quantity } = req.body;

    try{
        const result = await updateTicket(id, name, price, quantity);
        res.status(200).json(result);
    }
    catch (err){
        res.status(400).send({ error: err.message });
    }
}

export async function deleteTicketController(req, res) {

    const { id } = req.params;

    try{
        const result = await deleteTicket(id);
        res.status(200).json(result);
    }
    catch (err){
        res.status(400).send({ error: err.message });
    }
}

