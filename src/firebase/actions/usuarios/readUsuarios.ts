import { database } from "./../../firebaseConfig";
import { ref, child, get } from "firebase/database";

export default async function readUsuarios(){
    const response = await get(child(ref(database),"usuarios/"))
    return response.val();
}