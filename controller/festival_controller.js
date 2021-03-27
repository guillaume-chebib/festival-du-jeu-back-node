const festival = require("../model/festival_model")
const prise_contact_controller = require("../controller/prise_contact_controller")
const societe_controller = require("../controller/societe_controller")
const espace_controller = require("../controller/espace_controller")


async function getAllFestival(){
    try{
        let festivals = await festival.getAllFestival()

        festivals =await Promise.all(festivals.map(async (festival) => ({
            ...festival,
            espaces: await espace_controller.getEspaceByIdFestival({id:festival.id_festival})
        })))
        return festivals
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
        console.log(body)
        const id = await festival.createFestival(body.annee_festival,body.nom_festival)
        console.log(id)

        await espace_controller.createEspace({prix_table_espace : body.prix_table_espace_1,prix_surface_espace:body.prix_surface_espace_1, nb_table_espace : body.nb_table_espace_1, nom_espace:"Espace 1"}, id)
        await espace_controller.createEspace({prix_table_espace : body.prix_table_espace_2,prix_surface_espace:body.prix_surface_espace_2, nb_table_espace : body.nb_table_espace_2, nom_espace:"Espace 2"}, id)
        await espace_controller.createEspace({prix_table_espace : body.prix_table_espace_3,prix_surface_espace:body.prix_surface_espace_3, nb_table_espace : body.nb_table_espace_3, nom_espace:"Espace 3"}, id)

        await initilisationPriseContact(id)


    }
    catch (e) {
        throw e
    }
}

async function initilisationPriseContact(id){
    const societes = await societe_controller.getAllExposantActif()

    for (const s of societes) {
        await prise_contact_controller.createPriseContact({
            id_festival_prise_contact: id,
            id_exposant_prise_contact: s.id_societe,
            statut_prise_contact: 'Pas encore contacté'
        });
    }
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
