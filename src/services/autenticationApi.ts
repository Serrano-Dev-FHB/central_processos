import { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";

export default async function autenticationApi(req: NextApiRequest, res: NextApiResponse){
    var data: Object = { secret: "", token: "" };
    data['secret'] = process.env.secret;
   
    if(req.headers['authorization']){
       data['token'] = req.headers['authorization'].split(' ')[1];
    }

    jwt.verify(data['token'], data['secret'], function(err, decoded){
        if (err) return res.status(500).json({ status: false, message: 'Failed to authenticate token.' });
        req['usuario'] = decoded['usuario'];
    });
}