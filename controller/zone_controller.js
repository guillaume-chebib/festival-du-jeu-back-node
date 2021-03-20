const zone = require("../model/zone_model")

async function createZone(body){
    try{
        return await zone.createZone(body.nom, body.id_festival)
    }
    catch (e) {
        throw e
    }
}

async function updateZone(params, body){
    try{
        return await zone.updateZone(params.id,body.nom)
    }
    catch (e) {
        throw e
    }
}

async function deleteZone(params){
    try{
        return await zone.deleteZone(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getAllZone(){
    try{
        return await zone.getAllZone()
    }
    catch (e) {
        throw e
    }
}

async function getZoneByIdFestival(params){
    try{
        return await zone.getZoneByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getZoneById(params){
    try{
        return await zone.getZoneById(params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllZone,getZoneByIdFestival,getZoneById, updateZone, createZone, deleteZone}
