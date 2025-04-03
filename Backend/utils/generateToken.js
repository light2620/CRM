import jwt from "jsonwebtoken"

export default function generateToken(id){
    const token = jwt.sign({id},process.env.TOKEN_SECRET_KEY,{expiresIn: "12h"})
    return token;
}