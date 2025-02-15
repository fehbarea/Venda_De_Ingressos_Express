import mongoose from 'mongoose';

const mongoConnection = (req, res, next) => {
    mongoose.connect("mongodb://localhost:27017/projeto2").catch((err) => {
        console.log("Error ao conectar no banco...")
    })
    return next();
}

export default mongoConnection;