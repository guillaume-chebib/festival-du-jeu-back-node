const jeu = require("../model/jeu_model")

async function getAllJeu(){
    try{
        return await jeu.getAllJeu()
    }
    catch (e) {
        throw e
    }
}

async function getJeuByIdEditeur(id_editeur){
    try{
        return await jeu.getJeuByIdEditeur(id_editeur)
    }
    catch (e) {
        throw e
    }
}

async function getJeuByIdType(id_type){
    try{
        return await jeu.getJeuByIdType(id_type)
    }
    catch (e) {
        throw e
    }
}

async function getJeuByTypeName(nom){
    try{
        return await jeu.getJeuByTypeName(nom)
    }
    catch (e) {
        throw e
    }
}

async function getJeuById(id){

    try{
        return await jeu.getJeuById(id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllJeu, getJeuByIdType, getJeuByIdEditeur,getJeuById, getJeuByTypeName}
