import { deleteFireStore } from "../../firestore";

export default async function deleteUsuariosAction(id: String){ 
    const response = await deleteFireStore(id, "usuarios");
    return response;
}