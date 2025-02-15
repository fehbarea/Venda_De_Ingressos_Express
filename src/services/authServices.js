import jwt from'jsonwebtoken'

export function generateToken(user){

    const payload = {
        id: user.id,
        isAdmin: user.isAdmin
    }

    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIME });
}
