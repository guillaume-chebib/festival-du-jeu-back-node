const festival = require("../model/festival_model")

async function getAllFestival(){
    try{
        return await festival.getAllFestival()
    }
    catch (e) {
        throw e
    }
}

async function getFestivalCourant(){
    try{
        return await festival.getFestivalCourant()
    }
    catch (e) {
        throw e
    }
}

async function createFestival(body){
    try{
        await festival.createFestival(body.annee_festival,body.nom_festival)
    }
    catch (e) {
        throw e
    }
}

async function updateFestival(body){
    try{
        return await festival.updateFestival(body.id,body.annee_festival,body.nom_festival,body.est_courant_festival)
    }
    catch (e) {
        throw e
    }
}

async function getFestivalById(params){
    try{
        return await festival.getFestivalById(params.id)
    }
    catch (e) {
        throw e
    }
}


module.exports = {getAllFestival,createFestival,updateFestival,getFestivalById,getFestivalCourant}
