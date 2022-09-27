import { NextApiRequest, NextApiResponse } from "next";
import updateUsuariosAction from "../../../firebase/actions/usuarios/updateUsuariosAction";
import IUsuarios from "../../../firebase/interfaces/usuarios";

import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";
import validationParams from "../../../services/validationParams";

export default async function update(req: NextApiRequest, res: NextApiResponse) {
    const obrigatorios = ["id","nome"];
    const tipos = ["string","string"];

    await validationMethods(req, res, "POST");
    await autenticationApi(req, res);
    const validation = await validationParams(req.body,obrigatorios,tipos);

    if(!validation['status']){
        return res.status(404).json(validation);
    }

    const { id, nome }: any = validation['data'];
    const usuario: IUsuarios = { nome };
   
    return res.status(200).json(( await updateUsuariosAction(id, usuario)))
}