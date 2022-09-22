import { NextApiRequest, NextApiResponse } from "next";

import readProcessosArquivos from "../../../firebase/actions/processos_arquivos/readProcessosArquivos";
import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";

export default async function processos_arquivos(req: NextApiRequest, res: NextApiResponse) {
    await validationMethods(req, res, "GET");
    await autenticationApi(req, res);
    return res.status(200).json((await readProcessosArquivos()));
}