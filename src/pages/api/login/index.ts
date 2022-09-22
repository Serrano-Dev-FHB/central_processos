import { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";
import validationMethods from "../../../services/validationMethods";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    await validationMethods(req, res, "POST");
    const {email, password} = JSON.parse(req.body);

    if(email === 'win2016_br@outlook.com' && password === '257119aa'){
        const token: String = jwt.sign({id: 1}, process.env.secret, { expiresIn: process.env.expired + "d" });
        return res.status(200).json({ 'auth': true, 'token': token });
    }

    return res.status(500).json({message: 'Login inválido!'});
}