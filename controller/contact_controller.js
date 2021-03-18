const contact = require("../model/contact_model")
//const societe = require("../model/societe")

async function createContact(body){
    try{
        //const id_societe = societe.getIdSocieteByName(body.nom_societe)
        await contact.createContact(body.prenom,body.nom,body.email,body.telephone_portable,body.telephone_fixe, body.fonction, body.est_principal,body.id_societe)
    }
    catch (e) {
        throw e
    }
}

async function updateContact(body){
    try{
        //const id_societe = societe.getIdSocieteByName(body.nom_societe)
        await contact.updateContact(body.id,body.prenom,body.nom,body.email,body.telephone_portable,body.telephone_fixe, body.fonction, body.est_principal,body.id_societe)
    }
    catch (e) {
        throw e
    }
}

async function deleteContact(params){
    try{
        //const id_societe = societe.getIdSocieteByName(body.nom_societe)
        await contact.deleteContact(params.id)
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

async function getContactByIdSociete(params){
    try{
        return await contact.getContactByIdSociete(params.id_societe)
    }
    catch (e) {
        throw e
    }
}

async function getContactById(params){
    try{
        return await contact.getContactById(params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllContact,getContactByIdSociete, deleteContact,getContactById, createContact,updateContact}
