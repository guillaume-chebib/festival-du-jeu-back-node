const typejeu = require("../model/typejeu_model")

async function getAllTypeJeu(){
    try{
        return await typejeu.getAllTypeJeu()
    }
    catch (e) {
        throw e
    }
}

async function getTypeJeuById(params){
    try{
        return await typejeu.getTypeJeuById(params.id)
    }
    catch (e) {
        throw e
    }
}

async function createTypeJeu(body){
    try{
        return await typejeu.createTypeJeu(body.nom_type_jeu)
    }
    catch (e) {
        throw e
    }
}

async function updateTypeJeu(params,body){
    try{
        return await typejeu.updateTypeJeu(params.id,body.nom_type_jeu)
    }
    catch (e) {
        throw e
    }
}

async function deleteTypeJeu(params){
    try{
        return await typejeu.deleteTypeJeu(params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllTypeJeu, getTypeJeuById, updateTypeJeu, createTypeJeu,deleteTypeJeu}
