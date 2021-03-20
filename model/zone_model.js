const db = require('../db')


async function createZone(nom, id_festival) {
    try {
        const {rows} = await db.query('INSERT INTO public."Zone" (id_festival_zone,nom_zone) VALUES($1, $2);', [id_festival,nom])
        return rows
    }
    catch (e) {
        throw e
    }
}

async function updateZone(id,nom) {
    try {
        const {rows} = await db.query('UPDATE public."Zone" SET nom_zone = $2 WHERE id_zone = $1;', [id,nom])
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

module.exports = {createZone,getAllZone, getZoneByIdFestival, deleteZone, getZoneById, updateZone}
