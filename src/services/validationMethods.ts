export default async function validationMethods(req, res, method){
    if(req.method != method) return res.status(404).json({ "status": false, "mensagem": "Method invalido!" });
}