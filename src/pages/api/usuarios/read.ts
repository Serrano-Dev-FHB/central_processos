import { NextApiRequest, NextApiResponse } from "next";

import readUsuarios from "../../../firebase/actions/usuarios/readUsuarios";
import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";

export default async function read(req: NextApiRequest, res: NextApiResponse) {
    await validationMethods(req, res, "GET");
    await autenticationApi(req, res);
    
    return res.status(200).json((await readUsuarios()));
}