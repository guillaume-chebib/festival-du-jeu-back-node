const jeu = require("../model/jeu_reserve_model")

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
        return await jeu.getJeuReserveByIdZone(params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllJeuReserve, getJeuReserveByIdReservation, getJeuReserveByIdFestival, getJeuReserveByIdZone}
