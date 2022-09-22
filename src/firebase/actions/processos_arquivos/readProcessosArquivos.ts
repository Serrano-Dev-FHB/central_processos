import { database } from "../../firebaseConfig";
import { ref, child, get } from "firebase/database";

export default async function readProcessosArquivos(){
    const response = await get(child(ref(database),"processos_arquivos/"))
    return response.val();
}