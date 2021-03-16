const contact = require("../model/contact_model")

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

module.exports = {getAllContact,getContactByIdSociete,getContactById}
