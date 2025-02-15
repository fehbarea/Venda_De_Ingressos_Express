import mongoose from "mongoose";
import { generateToken } from '../services/authServices.js';
import customError from '../customErrors/CustomError.js'

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true}

});

const UserModel = mongoose.model("User", UserSchema);

export async function createUser(name, email, password, isAdmin) {
    const alreadyExists = await UserModel.findOne({ email: email });

    console.log(alreadyExists)
    if (alreadyExists) {
        throw new customError('400','Email já cadastrado');

    }

    const newUser = new UserModel({
        name: name,
        email: email,
        password: password,
        isAdmin: isAdmin
    })

    await newUser.save();
    return newUser;

}

export async function login(email, password){

    const currentUser = UserModel.findOne(email);

    if(currentUser && currentUser.password == password){
        return generateToken(currentUser);
    }

    throw new customError('400','Email ou senha inválido');

};
