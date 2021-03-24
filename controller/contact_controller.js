const contact = require("../model/contact_model")
//const societe = require("../model/societe")

async function createContact(body){
    try{
        await contact.createContact(body.prenom_contact,body.nom_contact,body.email_contact,body.telephone_portable_contact,
            body.telephone_fixe_contact, body.fonction_contact, body.est_principal_contact,body.id_societe_contact)
    }
    catch (e) {
        throw e
    }
}

async function updateContact(params,body){
    try{
        await contact.updateContact(params.id,body.prenom_contact,body.nom_contact,body.email_contact,
            body.telephone_portable_contact,body.telephone_fixe_contact, body.fonction_contact, body.est_principal_contact,body.id_societe_contact)
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
        return await contact.getContactByIdSociete(params.id)
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
