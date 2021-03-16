const prisecontact = require("../model/prisecontact_model")

async function getAllPriseContact(){
    try{
        return await prisecontact.getAllPriseContact()
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactByStatus(statut){
    try{
        return await prisecontact.getPriseContactByStatus(statut)
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactById(id_festival,id_societe){
    try{
        return await prisecontact.getPriseContactById(id_festival,id_societe)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllPriseContact,getPriseContactByStatus,getPriseContactById}
