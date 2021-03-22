const jeu_model = require("../model/jeu_model")

async function getAllJeu(){
    try{
        return await jeu_model.getAllJeu()
    }
    catch (e) {
        throw e
    }
}

async function getJeuByIdEditeur(params){
    try{
        return await jeu_model.getJeuByIdEditeur(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getJeuByIdType(params){
    try{
        return await jeu_model.getJeuByIdType(params.id)
    }
    catch (e) {
        throw e
    }
}

async function getJeuByTypeName(params){
    try{
        return await jeu_model.getJeuByTypeName(params.nom)
    }
    catch (e) {
        throw e
    }
}

async function getJeuById(params){

    try{
        return await jeu_model.getJeuById(params.id)
    }
    catch (e) {
        throw e
    }
}

async function createJeu(body){
    try{
        await jeu_model.createJeu(body.titre_jeu, body.min_joueur_jeu, body.max_joueur_jeu,
                                                    body.age_min_jeu, body.proto_jeu, body.id_type_jeu_jeu,
                                                    body.id_editeur_jeu,body.url_consignes_jeu, body.duree_jeu
        )
    }
    catch (e) {
        throw e
    }
}

async function updateJeu(params,body){
    try{
        await jeu_model.updateJeu(params.id,body.titre_jeu, body.min_joueur_jeu, body.max_joueur_jeu,
            body.age_min_jeu, body.proto_jeu, body.id_type_jeu_jeu,
            body.id_editeur_jeu,body.url_consignes_jeu, body.duree_jeu
        )
    }
    catch (e) {
        throw e
    }
}

async function deleteJeu(params){
    try{
        await jeu_model.deleteJeu(params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllJeu, getJeuByIdType, getJeuByIdEditeur,getJeuById, getJeuByTypeName,createJeu,updateJeu, deleteJeu}
