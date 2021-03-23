const model = require("../model/organisateur_model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require('dotenv').config()

async function login(body){
    try{
        const mail = body.mail
        const password = body.password
        const users = await model.getOrganisateurByMail(mail)
        if(users.length < 1) {
            throw new Error("Mauvais identifiants")
        }
        else{

            const match = await bcrypt.compare(password, users[0].mot_de_passe_organisateur)
            if(match) {

                var token = jwt.sign({
                    superuser: users[0].est_admin_organisateur,
                    id: users[0].id_organisateur
                }, process.env.JWTKEY, {
                    expiresIn: 3600 //1h
                });
                return {message: "ok", token: token}
            }
            else{
                throw new Error("Mauvais identifiants")
            }
        }
    }
    catch (e) {
        throw e
    }
}

module.exports = {login}
