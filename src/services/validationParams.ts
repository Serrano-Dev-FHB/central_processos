export default async function validationParams(params: Object, obrigatorios: any, tipos: any){
    const keys = Object.keys(params);
    const values = Object.values(params);
    const data = Object;

    if(obrigatorios.length != keys.length){ return {"status": false, "mensagem": `Param obrigatorios ${obrigatorios}`} }

    for (let index = 0; index < obrigatorios.length; index++) {
        if(obrigatorios.indexOf(keys[index]) != -1){
            if(typeof(values[index]) != tipos[index]) return {"status": false, "mensagem": `Param obrigatorios [${obrigatorios[index]}]:${tipos[index]}!`}
            if(typeof(values[index]) != "number" && typeof(values[index]) != "boolean"){
                if(values[index].trim()){ data[keys[index]] = values[index]; }
            }else{ data[keys[index]] = values[index]; }
        }else{ return {"status": false, "mensagem": `Param obrigatorios [${obrigatorios[index]}]!`}}
    }

    return {"status": true, "data": data};
}