const jeu_model = require("../model/jeu_model")

async function getAllJeu(){
    try{
        return await jeu_model.getAllJeu()
    }
    catch (e) {
        throw e
    }
}

async function getJeuByIdEditeur(id_editeur){
    try{
        return await jeu_model.getJeuByIdEditeur(id_editeur)
    }
    catch (e) {
        throw e
    }
}

async function getJeuByIdType(id_type){
    try{
        return await jeu_model.getJeuByIdType(id_type)
    }
    catch (e) {
        throw e
    }
}

async function getJeuByTypeName(nom){
    try{
        return await jeu_model.getJeuByTypeName(nom)
    }
    catch (e) {
        throw e
    }
}

async function getJeuById(id){

    try{
        return await jeu_model.getJeuById(id)
    }
    catch (e) {
        throw e
    }
}

async function createJeu(body){
    try{
        await jeu_model.createJeu(body.titre, body.min_joueur, body.max_joueur,
                                                    body.age_min, body.proto, body.id_type_jeu,
                                                    body.id_editeur,body.url
        )
    }
    catch (e) {
        throw e
    }
}

async function updateJeu(body){
    try{
        await jeu_model.updateJeu(body.id,body.titre, body.min_joueur, body.max_joueur,
            body.age_min, body.proto, body.id_type_jeu,
            body.id_editeur,body.url
        )
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllJeu, getJeuByIdType, getJeuByIdEditeur,getJeuById, getJeuByTypeName,createJeu,updateJeu}
