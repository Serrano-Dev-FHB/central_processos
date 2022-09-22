import { NextApiRequest, NextApiResponse } from "next";

import readProcessos from "../../../firebase/actions/processos/readProcessos";
import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";

export default async function processos(req: NextApiRequest, res: NextApiResponse) {
    await validationMethods(req, res, "GET");
    await autenticationApi(req, res);
    return res.status(200).json((await readProcessos()));
}