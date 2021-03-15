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

module.exports = {getAllFestival}
