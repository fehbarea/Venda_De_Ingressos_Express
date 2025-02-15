import jwt from'jsonwebtoken'
import customError from '../customErrors/CustomError.js';

export function generateToken(user){

    const payload = {
        id: user.id,
        isAdmin: user.isAdmin
    }

    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIME });
}

export function validToken(token){

    if(!token) throw new customError('401', 'token inválido');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        throw new customError('401', 'Token inválido ou expirado');
    }
}   
