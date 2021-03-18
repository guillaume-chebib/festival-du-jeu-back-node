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

        return await allocation_espace.createAllocationEspace(body.nb_table_allocation,body.m2_allocation,body.remise_allocation, body.id_espace, params.id)
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllocationsByIdReservation,createAllocationEspace}
