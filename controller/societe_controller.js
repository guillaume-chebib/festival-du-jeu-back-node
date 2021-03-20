const societe_model = require("../model/societe_model")

async function getAllSociete(){
    try{
        return await societe_model.getAllSociete()
    }
    catch (e) {
        throw e
    }
}

async function getSocieteWithReservationByIdFestival(params){
    try{
        return await societe_model.getSocieteWithReservationByIdFestival(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getAllExposantActif(){
    try{
        return await societe_model.getAllExposantActif()
    }
    catch (e) {
        throw e
    }
}

async function getSocieteByVille(params){
    try{
        return await societe_model.getSocieteByVille(params.ville)
    }
    catch (e) {
        throw e
    }
}

async function getAllEditeur(){
    try{
        return await societe_model.getSocieteByVille()
    }
    catch (e) {
        throw e
    }
}

async function getAllExposant(){
    try{
        return await societe_model.getSocieteByVille()
    }
    catch (e) {
        throw e
    }
}

async function getAllEditeurExposant(){
    try{
        return await societe_model.getSocieteByVille()
    }
    catch (e) {
        throw e
    }
}

async function getSocieteById(params){

    try{
        return await societe_model.getSocieteById(params.id)
    }
    catch (e) {
        throw e
    }
}

async function createSociete(body){
    try{
        await societe_model.createSociete(body.nom, body.est_exposant, body.numero_rue,
            body.rue, body.est_editeur, body.est_inactif,body.ville, body.code_postal )
    }
    catch (e) {
        throw e
    }
}

async function updateSociete(body){
    try{
        await societe_model.updateSociete(body.id,body.nom, body.est_exposant, body.numero_rue,
            body.rue, body.est_editeur, body.est_inactif,body.ville, body.code_postal ,
            body.id_editeur,body.url
        )
    }
    catch (e) {
        throw e
    }
}

async function deleteSociete(params){
    try{
        await societe_model.deleteSociete(params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllEditeur, getAllEditeurExposant, getAllExposant, getAllSociete,getSocieteById, getAllExposantActif, getSocieteByVille,createSociete,updateSociete, getSocieteWithReservationByIdFestival, deleteSociete}
