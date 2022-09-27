import { NextApiRequest, NextApiResponse } from "next";

import createUsuariosAction from "../../../firebase/actions/usuarios/createUsuariosAction";
import IUsuarios from "../../../firebase/interfaces/usuarios";
import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";
import validationParams from "../../../services/validationParams";

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    const obrigatorios = ["nome"];
    const tipos = ["string"];

    await validationMethods(req, res, "POST");
    await autenticationApi(req, res);
    const validation = await validationParams(req.body,obrigatorios,tipos);
    
    if(!validation['status']){
        return res.status(404).json(validation);
    }

    const { nome }: any = validation['data'];
    const usuario: IUsuarios = { nome };
    const resposta = await createUsuariosAction(usuario);
    return res.status(200).json(resposta)
}