import { createFireStore } from "../../firestore";
import IUsuarios from "../../interfaces/usuarios";

export default async function createUsuariosAction(usuario: IUsuarios){ 
   const response = await createFireStore("usuarios", usuario);
   return response;
}