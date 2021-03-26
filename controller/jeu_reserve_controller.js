const jeu = require("../model/jeu_reserve_model")
const festival = require("../model/festival_model")


async function createJeuReserve(body){
    try{
        return await jeu.createJeuReserve(body.id_jeu_jeu_reserve,body.id_reservation_jeu_reserve, body.quantit_jeu_reservee,
                                            body.nb_table_jeu_reserve, body.tombola_jeu_reserve,body.dotation_jeu_reserve,
                                            body.place_plan_jeu_reserve, body.recu_jeu_reserve, body.a_renvoyer_jeu_reserve,
                                            body.est_renvoye_jeu_reserve, body.montant_renvoi_jeu_reserve, body.id_zone_jeu_reserve, body.derniere_modif_jeu_reserve)
    }
    catch (e) {
        console.log(e)
        throw e
    }
}

async function updateJeuReserve(params,body){
    try{
        return await jeu.updateJeuReserve(params.id_jeu,params.id, body.quantite_jeu_reserve, body.nb_table_jeu_reserve, body.tombola_jeu_reserve,
                                            body.dotation_jeu_reserve, body.place_plan_jeu_reserve, body.recu_jeu_reserve, body.a_renvoyer_jeu_reserve,
                                            body.est_renvoye_jeu_reserve, body.montant_renvoi_jeu_reserve, body.id_zone_jeu_reserve, body.derniere_modif_jeu_reserve)
    }
    catch (e) {
        console.log(e)
        throw e
    }
}

async function deleteJeuReserve(params){
    try{
        return await jeu.deleteJeuReserve(params.id_jeu,params.id_reservation)
    }
    catch (e) {
        throw e
    }
}

async function getAllJeuReserve(){
    try{
        return await jeu.getAllJeuReserve()
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdFestival(params){
    try{
        return await jeu.getJeuReserveByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveForCurrentFestivalPublic(){
    try{
        const id = await festival.getFestivalCourant()
        return await jeu.getJeuReserveByIdFestivalPublic(id[0].id_festival)
    }
    catch (e) {
        throw e
    }
}


async function getJeuReserveByIdReservation(params){
    try{
        return await jeu.getJeuReserveByIdReservation(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdZone(params){
    try{
        return await jeu.getJeuReserveByIdZone(params.id_zone)
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdZonePublic(params){
    try{
        return await jeu.getJeuReserveByIdZonePublic(params.id_zone)
    }
    catch (e) {
        throw e
    }
}

async function getJeuReserveByIdSocieteFestival(params){
    try{
        return await jeu.getJeuReserveByIdSocieteFestival(params.id_societe,params.id_festival)
    }
    catch (e) {
        throw e
    }
}
async function getJeuReserveByIdSocieteFestivalPublic(params){
    try{
        return await jeu.getJeuReserveByIdSocieteFestivalPublic(params.id_societe,params.id_festival)
    }
    catch (e) {
        throw e
    }
}
module.exports = {getJeuReserveByIdSocieteFestivalPublic,getJeuReserveByIdZonePublic,getAllJeuReserve, updateJeuReserve, createJeuReserve, deleteJeuReserve, getJeuReserveByIdReservation, getJeuReserveByIdFestival, getJeuReserveByIdZone, getJeuReserveByIdSocieteFestival,getJeuReserveForCurrentFestivalPublic}
