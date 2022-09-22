import { NextApiRequest, NextApiResponse } from "next";

import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";

export default async function _delete(req: NextApiRequest, res: NextApiResponse) {
    await validationMethods(req, res, "GET");
    await autenticationApi(req, res);
}