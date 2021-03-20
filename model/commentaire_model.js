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

module.exports = {getCommentairesByIdReservation, createCommentaireById}
