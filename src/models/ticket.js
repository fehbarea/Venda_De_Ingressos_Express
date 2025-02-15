import mongoose from "mongoose";
import customError from '../customErrors/CustomError.js'

const ticketSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        totalQuantity: { type: Number, required: true },
        soldQuantity: { type: Number, required: true },
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

    const ticket = await ticketModel.findOne({ _id: id });

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
