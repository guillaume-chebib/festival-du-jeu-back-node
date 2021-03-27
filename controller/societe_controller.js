const societe_model = require("../model/societe_model")
const contact_model = require("../model/contact_model")
const jeu_reserve_controller = require("../controller/jeu_reserve_controller")
const festival = require("../model/festival_model")

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

async function getAllEditeurSeulement(){
    try{
        const societes = await societe_model.getAllEditeurSeulement()
        for (let i = 0; i < societes.length; i++) {
            let contacts = await contact_model.getContactByIdSociete(societes[i].id_societe)
            societes[i] = {...societes[i], contacts : contacts }
        }
        return societes
    }
    catch (e) {
        throw e
    }
}

async function getAllExposantSeulement(){
    try{
        const societes = await societe_model.getAllExposantSeulement()
        for (let i = 0; i < societes.length; i++) {
            let contacts = await contact_model.getContactByIdSociete(societes[i].id_societe)
            societes[i] = {...societes[i], contacts : contacts }
        }
        return societes
    }
    catch (e) {
        throw e
    }
}

async function getAllEditeurs(){
    try{
        return await societe_model.getAllEditeurs()
    }
    catch (e) {
        throw e
    }
}

async function getAllEditeursPublic(){
    try{
        return await societe_model.getAllEditeursPublic()
    }
    catch (e) {
        throw e
    }
}
async function getAllEditeurExposant(){
    try{
        const societes = await societe_model.getAllEditeurExposant()
        for (let i = 0; i < societes.length; i++) {
            let contacts = await contact_model.getContactByIdSociete(societes[i].id_societe)
            societes[i] = {...societes[i], contacts : contacts }
        }
        return societes
    }
    catch (e) {
        throw e
    }
}
async function getAllEditeurNonInactif(){
    try{
        return await societe_model.getAllEditeurNonInactif()
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
        await societe_model.createSociete(body.nom_societe, body.est_exposant_societe, body.numero_rue_editeur,
            body.rue_editeur, body.est_editeur_societe, body.est_inactif_societe,body.ville_editeur, body.code_postal_editeur )
    }
    catch (e) {
        console.log(e)
        throw e
    }
}

async function updateSociete(params,body){
    try{
        await societe_model.updateSociete(params.id,body.nom_societe, body.est_exposant_societe, body.numero_rue_editeur,
            body.rue_editeur, body.est_editeur_societe, body.est_inactif_societe, body.ville_editeur, body.code_postal_editeur
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

async function getEditeurForCurrentFestivalPublic(){
    const id = await festival.getFestivalCourant()

    const societes = await getAllEditeursPublic()
    let res_json = []
    for (let i = 0; i < societes.length; i++) {
        let jeuxSociete = await jeu_reserve_controller.getJeuReserveByIdSocieteFestivalPublic({id_societe:societes[i].id_societe,id_festival:id[0].id_festival})
        console.log(jeuxSociete)
        if(jeuxSociete.length >0) {
            let json_temp = {societe: societes[i], jeux: jeuxSociete}
            res_json = res_json.concat(json_temp);
        }
    }

    return res_json
}

module.exports = {getAllEditeursPublic,getEditeurForCurrentFestivalPublic,getAllEditeurNonInactif,getAllEditeurs,getAllEditeurSeulement, getAllEditeurExposant, getAllExposantSeulement, getAllSociete,getSocieteById, getAllExposantActif, getSocieteByVille,createSociete,updateSociete, getSocieteWithReservationByIdFestival, deleteSociete}
