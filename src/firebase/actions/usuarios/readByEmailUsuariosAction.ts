import { readByIgualFireStore } from "../../firestore";

export default async function readByEmailUsuariosAction(email: String){
    const response = await readByIgualFireStore("usuarios", "nm_email", email);
    return response;
}

