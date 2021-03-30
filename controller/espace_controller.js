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
        let res = await espace_model.getEspaceByIdFestival(params.id)
        //console.log(res)
        return res
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

async function createEspace(body,id) {
    try{
        await espace_model.createEspace(body.prix_table_espace,body.prix_surface_espace, body.nb_table_espace, body.nom_espace,id)
    }
    catch (e) {
        throw e
    }
}

async function updateEspace(body,params) {
    try {
        await espace_model.updateEspace(body.prix_table_espace,body.prix_surface_espace,body.nb_table_espace,params.id)

    }
    catch (e) {
        console.log(e)
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
