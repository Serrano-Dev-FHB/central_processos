import { NextApiRequest, NextApiResponse } from "next";

import autenticationApi from "../../../services/autenticationApi";
import validationMethods from "../../../services/validationMethods";

export default async function update(req: NextApiRequest, res: NextApiResponse) {
    await validationMethods(req, res, "POST");
    await autenticationApi(req, res);
}