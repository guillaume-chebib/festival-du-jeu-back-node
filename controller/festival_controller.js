const festival = require("../model/festival_model")

async function getAllFestival(){
    try{
        return await festival.getAllFestival()
    }
    catch (e) {
        throw e
    }
}

async function createFestival(body){
    try{
        await festival.createFestival(body.annee,body.nom)
    }
    catch (e) {
        throw e
    }
}

async function updateFestival(body){
    try{
        await festival.updateFestival(body.id,body.annee,body.nom)
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


module.exports = {getAllFestival,createFestival,updateFestival,getFestivalById}
