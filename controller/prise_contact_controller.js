

const prisecontact = require("../model/prise_contact_model")
const contact_controller = require("../controller/contact_controller")


async function getAllPriseContact(){
    try{
        return await prisecontact.getAllPriseContact()
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactByStatus(params){
    try{
        return await prisecontact.getPriseContactByStatus(params.id,params.statut)
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactById(params){
    try{
        return await prisecontact.getPriseContactById(params.id_festival,params.id_exposant)
    }
    catch (e) {
        throw e
    }
}
async function getPriseContactByIdFestival(params) {
    try{

        const prise_contacts = await prisecontact.getPriseContactByIdFestival(params.id_festival)

        for (let i = 0; i < prise_contacts.length; i++) {
            let contacts = await contact_controller.getContactByIdSociete(prise_contacts[i])
            prise_contacts[i] = {...prise_contacts[i], contacts : contacts }
        }

        return prise_contacts
    }
    catch (e) {
        throw e
    }
}

async function getPriseContactByIdExposant(params) {
    try{
        return await prisecontact.getPriseContactByIdExposant(params.id)
    }
    catch (e) {
        throw e
    }
}

async function createPriseContact(body){
    try{
        console.log(body)
        return await prisecontact.createPriseContact(body.id_festival_prise_contact, body.id_exposant_prise_contact ,
                                                    body.premier_prise_contact, body.deuxieme_prise_contact,
                                                    body.troisieme_prise_contact,body.statut_prise_contact)
    }
    catch (e) {
        throw e
    }
}

async function updatePriseContact(params,body){
    try{
        return await prisecontact.updatePriseContact(params.id_festival, params.id ,body.premier_prise_contact,
                                                    body.deuxieme_prise_contact,body.troisieme_prise_contact,body.statut_prise_contact
                                                    )
    }
    catch (e) {
        console.log(e)
        throw e
    }
}

async function getStatusPriseContact(){
    try{
        return await prisecontact.getStatusPriseContact()
    }
    catch (e) {
        throw e
    }
}


module.exports = {getAllPriseContact,getPriseContactByStatus,getPriseContactById,updatePriseContact,
    createPriseContact, getPriseContactByIdFestival,getPriseContactByIdExposant,getStatusPriseContact}
