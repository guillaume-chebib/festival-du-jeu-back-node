const typejeu = require("../model/typejeu")

async function getAllTypeJeu(){
    try{
        return await typejeu.getAllTypeJeu()
    }
    catch (e) {
        throw e
    }
}

async function getTypeJeuById(id){
    try{
        return await typejeu.getTypeJeuById(id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllTypeJeu, getTypeJeuById}
