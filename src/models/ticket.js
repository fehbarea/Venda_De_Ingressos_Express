import mongoose from "mongoose";
import customError from '../customErrors/CustomError.js'

const ticketSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        place:  { type: Number, required: true },
        category:  { type: Number, required: true },
        totalQuantity: { type: Number, required: true },
        soldQuantity: { type: Number, required: true },
        boughtBy:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    }
)

const ticketModel = mongoose.model("Tickets", ticketSchema);

export async function createTicket(name, price, totalQuantity) {

    if (await ticketModel.findOne({ name: name, price: price, totalQuantity: totalQuantity })) {
        throw new customError(400, 'Ticket já cadastrado');

    }

    const newTicket = new ticketModel(
        {
            name: name,
            price: price,
            totalQuantity: totalQuantity,
            soldQuantity: 0
        }
    )

    await newTicket.save();
    return newTicket;
}

export async function updateTicket(id, name, price, totalQuantity) {

    const updatedTicket = ticketModel.updateOne({ _id: id },
        {
            name: name,
            price: price,
            totalQuantity: totalQuantity
        })

        
    if (!updatedTicket) throw new customError(404, 'Ticket não encontrado');

    return updatedTicket;
}

export async function getTicket(id){

    const ticket = await ticketModel.findById(id)
    if (!ticket) {
        throw new customError(400, 'Ticket não encontrado');

    }
    
    return ticket;
}

export async function deleteTicket(id) {
    
    const deletedTicket = await ticketModel.deleteOne({ _id: id });

    if(!deletedTicket.deletedCount === 0){
        throw new customError(404, 'Ticket não encontrado');
    }

    return deletedTicket.deletedCount;
}

export async function buyTicket(idUser, idTicket) {

    const ticket = await ticketModel.findById(idTicket);

    if (!ticket) {
        throw new customError(400, 'Ticket não encontrado');
    }

    if(ticket.soldQuantity >= ticket.totalQuantity){
        throw new customError(400, 'Nao existem mais ingressos disponiveis');
    }

    ticket.soldQuantity+=1;
    ticket.boughtBy.push(idUser);

    await ticket.save();
    return ticket;
}

export async function getTicketsPerUser(id) {

    const tickets = await ticketModel.find({boughtBy: id});

    if(!tickets){
        throw new customError(400, 'Nehum ticket comprado');
    }
    
    const ticketCounts = tickets.reduce((acc, ticket) => {
        const count = ticket.boughtBy.filter(userId => userId.equals(id)).length;
        acc.push({ ...ticket.toObject(), count: count });
        return acc;
    }, []);

    return ticketCounts;
}
