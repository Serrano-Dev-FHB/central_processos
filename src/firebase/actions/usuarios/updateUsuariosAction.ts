import { updateFireStore } from "../../firestore";
import IUsuarios from "../../interfaces/usuarios";

export default async function updateUsuariosAction(id: String, usuario: IUsuarios){ 
    const response = await updateFireStore(id, "usuarios", usuario);
    return response;
}