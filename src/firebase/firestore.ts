import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { database } from "./firebaseConfig";
import { v4 as uuidv4 } from 'uuid';

export async function readFireStore(table: String){
    const person = Array();
    const response = await getDocs(collection(database,`${table}`));
    response.forEach((doc) => {  
        const {...data} = doc.data();
        data.id = doc.id;
        person.push(data); 
    })
    return person;
}

export async function readByIdFireStore(id: String, table: String){
    const nameRef = doc(database, `${table}`, `${id}`);
    const response = await getDoc(nameRef);
    const data = response.data();
    data.id = response.id;
    return data;
}

export async function readByIgualFireStore(table: String, nm_campo: String, valor: any){
    const q = query(collection(database, `${table}`), where(`${nm_campo}`, "==", valor));
    const response = await getDocs(q);
    const person = Array();
    response.forEach((doc) => {  
        const {...data} = doc.data();
        data.id = doc.id;
        person.push(data); 
    })
    return person;
}

export async function createFireStore(table: String, objeto: any){
    try{
        const nameRef: any = collection(database,`${table}`);
        await setDoc(doc(nameRef, uuidv4()), objeto);
        return {"status": true, "mensagem": "Cadastrado com sucesso!"}
    }catch (error){
        return {"status": false, "mensagem": "Não cadastrado!"}
    }
}

export async function updateFireStore(id: String, table: String, objeto: any){
    try{
        const nameRef = doc(database, `${table}`, `${id}`);
        const {...data} = objeto;
        await updateDoc(nameRef, data);
        return {"status": true, "mensagem": "Editado com sucesso!"}
    } catch (error) {
        return {"status": false, "mensagem": "Não editado!"}
    }
}

export async function deleteFireStore(id: String, table: String){
    try{
        await deleteDoc(doc(database, `${table}`, `${id}`));
        return {"status": true, "mensagem": "Excluido com sucesso!"}
    } catch (error) {
        return {"status": false, "mensagem": "Não excluido!"}
    }
}
