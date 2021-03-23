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
        const hashPassword = await bcrypt.hash(body.mot_de_passe_organisateur, 10);
        return await organisateur.createOrganisateur(body.prenom_organisateur,body.nom_organisateur,body.email_organisateur,false,hashPassword)

    }
    catch (e) {
        throw e
    }
}

async function updateOrganisateur(id,body){
    try{
        let hashPassword
        if(body.mot_de_passe_organisateur!=="") {
            hashPassword = await bcrypt.hash(body.mot_de_passe_organisateur, 10);
        }
        else{
            hashPassword = null
        }
        return await organisateur.updateOrganisateur(id, body.prenom_organisateur, body.nom_organisateur, body.email_organisateur, false, hashPassword)

    }
    catch (e) {
        throw e
    }
}
module.exports = {getAllOrganisateur,getOrganisateurById,createOrganisateur,updateOrganisateur}
