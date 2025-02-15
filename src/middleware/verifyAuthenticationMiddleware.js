import { validToken } from '../services/authServices.js'
import CustomError from '../customErrors/CustomError.js';

export function authenticatedToken(req, res, next){
    const token = req.cookies.token;

    if(token){
        const user= validToken(token);
        req.user = user;
        return next();
    }

    return next(new CustomError(401, 'Token inválido!'));
}

export function isAdmin(req, res, next){
    
    if(!req.user.isAdmin){
        return next(new CustomError(403, 'Acesso negado! Você não é admin!'));
    }

    next();
}