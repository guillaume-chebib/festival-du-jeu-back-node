const festival = require("../model/festival_model")
const prise_contact_controller = require("../controller/prise_contact_controller")
const societe_controller = require("../controller/societe_controller")


async function getAllFestival(){
    try{
        return await festival.getAllFestival()
    }
    catch (e) {
        throw e
    }
}

async function getFestivalCourant(){
    try{
        return await festival.getFestivalCourant()
    }
    catch (e) {
        throw e
    }
}

async function createFestival(body){
    try{
        const id = await festival.createFestival(body.annee_festival,body.nom_festival)

        initilisationPriseContact(id)


    }
    catch (e) {
        throw e
    }
}

async function initilisationPriseContact(id){
    const societes = await societe_controller.getAllExposantActif()

    societes.forEach(async (s) =>
        await prise_contact_controller.createPriseContact({id_festival_prise_contact : id,id_exposant_prise_contact : s.id_societe,statut_prise_contact : 'Pas encore contacté'})
    )
}

async function updateFestival(body){
    try{
        return await festival.updateFestival(body.id,body.annee_festival,body.nom_festival,body.est_courant_festival)
    }
    catch (e) {
        throw e
    }
}

async function getFestivalById(params){
    try{
        return await festival.getFestivalById(params.id)
    }
    catch (e) {
        throw e
    }
}


module.exports = {getAllFestival,createFestival,updateFestival,getFestivalById,getFestivalCourant}
