const zone = require("../model/zone_model")
const festival = require("../model/festival_model")
const jeu_reserve_controller = require("../controller/jeu_reserve_controller")


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
        return await zone.getZoneByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getZoneForCurrentFestivalPublic(){
    try{
        let res_json = []
        const id = await festival.getFestivalCourant()
        console.log(id)
        let zones = await zone.getZoneByIdFestival(id[0].id_festival)
        for (let i = 0; i < zones.length; i++) {
            let jeuxZone = await jeu_reserve_controller.getJeuReserveByIdZonePublic(zones[i])
            let json_temp = {zone : zones[i], jeux : jeuxZone}
            res_json = res_json.concat(json_temp);
        }
        return res_json
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

module.exports = {getAllZone,getZoneByIdFestival,getZoneById, updateZone, createZone, deleteZone,getZoneForCurrentFestivalPublic}
