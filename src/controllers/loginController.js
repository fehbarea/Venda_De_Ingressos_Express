import {login, createUser}from '../models/Users.js';

export async function loginController(req, res){
    const { email, password} = req.body;
    
    try{
        const token = await login(email, password);

        res.cookie('token', token).status(200).redirect("/page/home");
    }
    catch(err){
        res.status(400).render('login', { error: err.message });
    }
}

export async function registerController(req, res) {
    const { email, password, name, isAdmin} = req.body;

    try{
        const user = await createUser(name, email, password, isAdmin);
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).send({ error: err.message });
    }
}
