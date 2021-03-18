const jeu = require("../model/jeu_reserve_model")

async function createJeuReserve(body){
    try{
        return await jeu.createJeuReserve(body.id_jeu,body.id_reservation, body.quantite, body.nb_table, body.tombola,
                                            body.dotation, body.place_plan, body.recu, body.a_renvoyer,
                                            body.est_renvoyer, body.montant_renvoi, body.id_zone)
    }
    catch (e) {
        throw e
    }
}

async function updateJeuReserve(body){
    try{
        return await jeu.updateJeuReserve(body.id_jeu,body.id_reservation, body.quantite, body.nb_table, body.tombola,
                                            body.dotation, body.place_plan, body.recu, body.a_renvoyer,
                                            body.est_renvoyer, body.montant_renvoi, body.id_zone)
    }
    catch (e) {
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

async function getJeuReserveByIdSocieteFestival(params){
    try{
        return await jeu.getJeuReserveByIdSocieteFestival(params.id_societe,params.id_festival)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllJeuReserve, updateJeuReserve, createJeuReserve, deleteJeuReserve, getJeuReserveByIdReservation, getJeuReserveByIdFestival, getJeuReserveByIdZone, getJeuReserveByIdSocieteFestival}
