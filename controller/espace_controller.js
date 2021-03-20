const espace_model = require("../model/espace_model")

async function getAllEspace(){
    try{
        return await espace_model.getAllEspace()
    }
    catch (e) {
        throw e
    }
}

async function getEspaceByIdFestival(params){
    try{
        return await espace_model.getEspaceByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getEspaceById(id){
    try{
        return await espace_model.getEspaceById(id)
    }
    catch (e) {
        throw e
    }
}

async function createEspace(body) {
    try{
        await espace_model.createEspace(body.prix_table,body.prix_surface, body.nb_table,body.id_festival)
    }
    catch (e) {
        throw e
    }
}

async function updateEspace(body,params) {
    try {
        await espace_model.updateEspace(body.prix_table,body.prix_surface,body.nb_table,params.id)
        res.status(200).json({ message: "success"})
    }
    catch (e) {
        res.status(500).json({ message: "can't modify data" });
    }
}

async function deleteEspace(params) {
    try{
        await espace_model.deleteReservation( params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllEspace,getEspaceByIdFestival,getEspaceById,updateEspace,deleteEspace, createEspace }
