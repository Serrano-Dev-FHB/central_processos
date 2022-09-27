import { NextApiRequest, NextApiResponse } from "next";

import deleteUsuariosAction from "../../../firebase/actions/usuarios/deleteUsuariosAction";
import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";
import validationParams from "../../../services/validationParams";

export default async function _delete(req: NextApiRequest, res: NextApiResponse) {
    const obrigatorios = ["id"];
    const tipos = ["string"];

    await validationMethods(req, res, "GET");
    await autenticationApi(req, res);
    const validation = await validationParams(req.body,obrigatorios,tipos);

    if(!validation['status']){
        return res.status(404).json(validation);
    }

    const { id }: any = validation['data'];

    const resposta = await deleteUsuariosAction(id);
    return res.status(200).json(resposta)
}