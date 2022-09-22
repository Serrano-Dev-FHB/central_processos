import IUsuarios from "./../../interfaces/usuarios";

import { v4 as uuidv4 } from 'uuid';
import { ref, set } from "firebase/database";
import { database } from "./../../firebaseConfig";

export default async function createUsuarios(usuario: IUsuarios){ 
    try{
        const reference = ref(database, "usuarios/" + uuidv4());
        await set(reference, usuario);
        return {"status": true, "mensagem": "Cadastrado com sucesso!"}
    } catch (error) {
        return {"status": false, "mensagem": "Não cadastrado!"}
    }
}