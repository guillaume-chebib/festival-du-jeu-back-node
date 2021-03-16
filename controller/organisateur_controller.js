const organisateur = require("../model/organisateur_model")

async function getAllOrganisateur(){
    try{
        return await organisateur.getAllOrganisateur()
    }
    catch (e) {
        throw e
    }
}

async function getOrganisateurById(id){
    try{
        return await organisateur.getOrganisateurById(id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllOrganisateur,getOrganisateurById}
