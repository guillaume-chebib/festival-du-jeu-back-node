const festival = require("../model/festival")

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
async function getFestivalById(body){
    try{
        await festival.getFestivalById(body.id)
    }
    catch (e) {
        throw e
    }
}
module.exports = {getAllFestival,createFestival,updateFestival,getFestivalById}
