const contact = require("../model/contact_model")
//const societe = require("../model/societe")

async function createContact(body){
    try{
        //const id_societe = societe.getIdSocieteByName(body.nom_societe)
        await contact.createContact(body.prenom,body.nom,body.email,body.telephone_portable,body.telephone_fixe, body.fonction, body.est_principal,id_societe)
    }
    catch (e) {
        throw e
    }
}

async function getAllContact(){
    try{
        return await contact.getAllContact()
    }
    catch (e) {
        throw e
    }
}

async function getContactByIdSociete(id_societe){
    try{
        return await contact.getContactByIdSociete(id_societe)
    }
    catch (e) {
        throw e
    }
}

async function getContactById(id){
    try{
        return await contact.getContactById(id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllContact,getContactByIdSociete,getContactById, createContact}
