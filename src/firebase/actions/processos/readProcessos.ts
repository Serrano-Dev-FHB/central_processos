import { database } from "./../../firebaseConfig";
import { ref, child, get } from "firebase/database";

export default async function readProcessos(){
    const response = await get(child(ref(database),"processos/"))
    return response.val();
}