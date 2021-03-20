const db = require('../db')

async function createCommentaireById(id_reservation, text_commentaire) {
    try {

        const query = 'INSERT INTO public."Commentaire" (id_reservation_commentaire,text_commentaire) VALUES($1, $2);'

        const params = [id_reservation, text_commentaire]
        const {rows} = await db.query(query, params )
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getCommentairesByIdReservation(id) {
    try {
        const query = 'SELECT * FROM public."Commentaire" WHERE id_reservation_commentaire = $1;'
        const {rows} = await db.query(query,[id] )
        return rows
    }
    catch (e) {
        throw e
    }
}

async function updateCommentaireById(id_reservation, text_commentaire, id) {
    try {
        const query = 'UPDATE public."Commentaire" SET id_reservation_commentaire = $1, text_commentaire = $2 WHERE id_commentaire = $3;'
        const params = [id_reservation, text_commentaire, id]

        await db.query(query, params)
    }
    catch (e) {
        throw e
    }
}

async function deleteCommentaire(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Commentaire" WHERE id_commentaire = $1 ', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {getCommentairesByIdReservation, createCommentaireById, updateCommentaireById,deleteCommentaire}
