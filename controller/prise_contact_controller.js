const prisecontact = require("../model/prise_contact_model")

async function getAllPriseContact(){
    try{
        return await prisecontact.getAllPriseContact()
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactByStatus(params){
    try{
        return await prisecontact.getPriseContactByStatus(params.id,params.statut)
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactById(params){
    try{
        return await prisecontact.getPriseContactById(params.id,params.id_exposant)
    }
    catch (e) {
        throw e
    }
}

async function createPriseContact(body){
    try{
        return await prisecontact.createPriseContact(body.id_festival, body.id_societe ,body.premier, body.deuxieme,body.troisieme,body.statut)
    }
    catch (e) {
        throw e
    }
}

async function updatePriseContact(body){
    try{
        return await prisecontact.updatePriseContact(body.id_festival, body.id_societe ,body.premier, body.deuxieme,body.troisieme,body.statut)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllPriseContact,getPriseContactByStatus,getPriseContactById,updatePriseContact,createPriseContact}
