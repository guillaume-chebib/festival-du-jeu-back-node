const db = require('../db')


async function getAllFestival() {
    try {
        const {rows} = await db.query('select * from public."Festival";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function createFestival(year,name) {
    try {
        const res = await db.query('INSERT INTO public."Festival" (nom_festival,annee_festival) VALUES($1,$2)', [name,year])
    }
    catch (e) {
        throw e
    }
}

module.exports = {getAllFestival,createFestival}
