const organisateur = require("../model/organisateur_model")
const bcrypt = require("bcrypt")
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

async function createOrganisateur(body){
    try{
        const hashPassword = await bcrypt.hash(body.mot_de_passe, 10);
        return await organisateur.createOrganisateur(body.prenom,body.nom,body.email,false,hashPassword)

    }
    catch (e) {
        throw e
    }
}
module.exports = {getAllOrganisateur,getOrganisateurById,createOrganisateur}
