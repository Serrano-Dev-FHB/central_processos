import { NextApiRequest, NextApiResponse } from "next";

import readByEmailUsuariosAction from "../../../firebase/actions/usuarios/readByEmailUsuariosAction";
import readByIdUsuariosAction from "../../../firebase/actions/usuarios/readByIdUsuariosAction";
import readUsuarios from "../../../firebase/actions/usuarios/readUsuariosAction";
import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";

export default async function read(req: NextApiRequest, res: NextApiResponse) {
    await validationMethods(req, res, "GET");
    await autenticationApi(req, res);

    if(req.query.id){
        const id: any = req.query.id;
        return res.status(200).json((await readByIdUsuariosAction(id)));
    }
    
    if(req.query.email){
        const email: any = req.query.email;
        return res.status(200).json((await readByEmailUsuariosAction(email)))
    }

    return res.status(200).json((await readUsuarios()));
}