const zone = require("../model/zone_model")
const jeu_reserve = require("../model/jeu_reserve_model")

async function createZone(body){
    try{
        return await zone.createZone(body.nom_zone, body.id_festival)
    }
    catch (e) {
        throw e
    }
}

async function updateZone(params, body){
    try{
        return await zone.updateZone(params.id,body.nom_zone)
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
        res_json = []
        const zones = await zone.getZoneByIdFestival(params.id)
        for (i = 0; i < zones.length; i++) {
            let jeuxZone = await jeu_reserve.getJeuReserveByIdZone(zones[i].id_zone_jeu_reserve)
            json_temp = {zone : zones[i], jeux : jeuxZone}
            res_json = res_json.concat(json_temp);
        }
        return zones
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
