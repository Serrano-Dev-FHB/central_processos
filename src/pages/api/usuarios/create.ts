import { NextApiRequest, NextApiResponse } from "next";

import createUsuarios from "../../../firebase/actions/usuarios/createUsuarios";
import IUsuarios from "../../../firebase/interfaces/usuarios";
import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    await validationMethods(req, res, "GET");
    await autenticationApi(req, res);
    
    // const { nome } = req.body;

    // if(!nome.trim()){
    //     return res.status(404).json({"status": false, "mensagem": "Preecha todo os campos!"})
    // }

    // const usuario: IUsuarios = { nome: nome };
    // const resposta = await createUsuarios(usuario);
    // return res.status(200).json(resposta)
}