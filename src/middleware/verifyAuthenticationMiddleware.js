import { validToken } from '../services/authServices.js'

export function authenticatedToken(req, res){
    const token = req.cookies.token;

    if(token && authHeader.startsWith('Bearer ') && authHeader.split(' ')[1]){
        validToken(token);
    }

    return next(new CustomError(401, 'Token inválido!'));
}