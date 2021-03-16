const espace = require("../model/espace")

async function getAllEspace(){
    try{
        return await espace.getAllEspace()
    }
    catch (e) {
        throw e
    }
}

async function getEspaceByIdFestival(id_festival){
    try{
        return await espace.getEspaceByIdFestival(id_festival)
    }
    catch (e) {
        throw e
    }
}

async function getEspaceById(id){
    try{
        return await espace.getEspaceById(id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllEspace,getEspaceByIdFestival,getEspaceById}
