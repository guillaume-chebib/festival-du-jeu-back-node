const prisecontact = require("../model/prisecontact_model")

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

module.exports = {getAllPriseContact,getPriseContactByStatus,getPriseContactById}
