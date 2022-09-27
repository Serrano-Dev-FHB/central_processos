import { readFireStore } from "../../firestore";

export default async function readUsuariosAction(){
    const response = await readFireStore("usuarios");
    return response;
}