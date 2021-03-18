const db = require('../db')


async function getAllocationsByIdReservation(id) {
    try {
        const query = 'SELECT * FROM public."Allocation_Espace" WHERE id_reservation_allocation_espace = $1;'
        const {rows} = await db.query(query,[id] )
        return rows
    }
    catch (e) {
        throw e
    }
}

async function createAllocationEspace(nb_table_allocation, m2_allocation, remise_allocation,id_espace, id_reservation) {
    try {

        const query = 'INSERT INTO public."Allocation_Espace" (nb_table_allocation_espace, m2_allocation_espace, ' +
            'remise_allocation_espace, id_espace_allocation_espace, id_reservation_allocation_espace)  ' +
            'VALUES($1, $2, $3, $4, $5);'
        const params = [nb_table_allocation, m2_allocation, remise_allocation,id_espace, id_reservation]


        const {rows} = await db.query(query, params )

        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllocationsByIdReservation,createAllocationEspace}
