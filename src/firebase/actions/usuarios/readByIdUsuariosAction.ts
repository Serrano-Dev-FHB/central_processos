import { readByIdFireStore } from "../../firestore";

export default async function readByIdUsuariosAction(id: String){
    const response = await readByIdFireStore(id, "usuarios");
    return response;
}