const zone = require("../model/zone_model")

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

module.exports = {getAllZone,getZoneByIdFestival,getZoneById}
