const allocation_espace = require("../model/allocation_espace_model")


async function getAllocationsByIdReservation(params){
    try{
        return await allocation_espace.getAllocationsByIdReservation(params.id)
    }
    catch (e) {
        throw e
    }
}


async function createAllocationEspace(body,params) {
    try{

        return await allocation_espace.createAllocationEspace(body.nb_table_allocation_espace,body.m2_allocation_espace,
            body.remise_allocation_espace, body.id_espace_allocation_espace, params.id_reservation_allocation_espace
        )
    }
    catch (e) {
        throw e
    }
}

async function updateAllocationEspace(body,params) {
    try{
        console.log(body,params)
        return await allocation_espace.updateAllocationEspace(body.nb_table_allocation_espace,body.m2_allocation_espace,
            body.remise_allocation_espace, params.id_espace, params.id
        )
    }
    catch (e) {
        throw e
    }
}

async function deleteAllocationEspace(params) {
    try{
        await allocation_espace.deleteAllocationEspace( params.id, params.id_espace)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllocationsByIdReservation, createAllocationEspace, updateAllocationEspace,deleteAllocationEspace}
