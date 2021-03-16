const zone = require("../model/zone_model")

async function getAllZone(){
    try{
        return await zone.getAllZone()
    }
    catch (e) {
        throw e
    }
}

async function getZoneByIdFestival(id_festival){
    try{
        return await zone.getZoneByIdFestival(id_festival)
    }
    catch (e) {
        throw e
    }
}

async function getZoneById(id){
    try{
        return await zone.getZoneById(id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllZone,getZoneByIdFestival,getZoneById}
