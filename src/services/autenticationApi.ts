import { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";

export default async function autenticationApi(req: NextApiRequest, res: NextApiResponse){
    const secret = process.env.secret;
    const token  = req.headers['authorization'].split(' ')[1];

    jwt.verify(token, secret, function(err, decoded){
        if (err) return res.status(500).json({ status: false, message: 'Failed to authenticate token.' });
        req['usuario'] = decoded['usuario'];
    });
}