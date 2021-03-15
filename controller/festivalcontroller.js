const festival = require("../model/festival")

async function getAllFestival(){
    try{
        return await festival.getAllFestival()
    }
    catch (e) {
        throw e
    }
}
module.exports = {getAllFestival}
