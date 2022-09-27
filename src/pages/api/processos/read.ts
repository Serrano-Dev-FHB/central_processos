import { NextApiRequest, NextApiResponse } from "next";
import readProcessosAction from "../../../firebase/actions/processos/readProcessosAction";

export default async function read(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json((await readProcessosAction()));
}