const contact = require("../model/contact_model")
//const societe = require("../model/societe")

async function createContact(body){
    try{
        await contact.createContact(body.prenom,body.nom,body.email,body.telephone_portable,body.telephone_fixe, body.fonction, body.est_principal,body.id_societe)
    }
    catch (e) {
        throw e
    }
}

async function updateContact(params,body){
    try{
        await contact.updateContact(params.id,body.prenom,body.nom,body.email,body.telephone_portable,body.telephone_fixe, body.fonction, body.est_principal,body.id_societe)
    }
    catch (e) {
        console.log(e)
        throw e
    }
}

async function deleteContact(params){
    try{
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
