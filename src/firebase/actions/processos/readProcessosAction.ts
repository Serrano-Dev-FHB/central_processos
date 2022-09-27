import { readFireStore } from "../../firestore";

export default async function readProcessosAction(){
  const response = await readFireStore("processos");
  return response;
}