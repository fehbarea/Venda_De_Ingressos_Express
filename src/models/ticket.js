import mongoose from "mongoose";
import customError from '../customErrors/CustomError.js'

const ticketSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        totalQuantity:{ type:Int32Array, required: true },
        availableQuantity:{ type:Int32Array, required: true },
    }
)

const ticketModel = mongoose.model("Tickets", ticketSchema);

export async function createTicket(name, price, totalQuantity) {
    
    const newTicket = new ticketModel(
        {
            name: name,
            price: price,
            totalQuantity: totalQuantity,
            availableQuantity: totalQuantity
        }
    )

    await newTicket.save();
    return newTicket;
}
