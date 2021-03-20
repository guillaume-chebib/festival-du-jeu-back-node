
const commentaire_model = require("../model/commentaire_model")

async function getCommentairesByIdReservation(params) {
    try{
        return await commentaire_model.getCommentairesByIdReservation(params.id)
    }
    catch (e) {
        throw e
    }
}

async function createCommentaireById(body) {
    try{
        return await commentaire_model.createCommentaireById(body.id_reservation,body.text_commentaire)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getCommentairesByIdReservation, createCommentaireById}

