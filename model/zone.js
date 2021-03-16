const db = require('../db')


async function createZone(id_festival,nom) {
    try {
        const {rows} = await db.query("INSERT INTO public.\"Zone\" (id_festival,nom_zone) VALUES($1, $2);", [id_festival,nom])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getAllZone() {
    try {
        const {rows} = await db.query('select * from public."Zone";', [])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function deleteZone(id) {
    try {
        const {rows} = await db.query('DELETE FROM public."Zone" WHERE id_zone = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}


async function getZoneByIdFestival(id_festival) {
    try {
        const {rows} = await db.query('select * from public."Zone" WHERE id_festival_zone = $1;', [id_festival])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function getZoneById(id) {
    try {
        const {rows} = await db.query('select * from public."Zone" WHERE id_zone = $1;', [id])
        return rows
    }
    catch (e) {
        throw e
    }
}

module.exports = {createZone,getAllZone, getZoneByIdFestival, deleteZone, getZoneById}
