const model = require("../model/organisateur_model")
const jwt = require("jsonwebtoken")
require('dotenv').config()

async function login(body){
    try{
        const mail = body.mail
        const password = body.password
        console.log(mail,password)
        const users = await model.getOrganisateurByMailAndPassword(mail,password)
        if(users.length < 1) {
            return {message:"Mauvais identifiants"}
        }
        else{
            var token = jwt.sign({ superuser: users[0].est_admin_organisateur,id: users[0].id_organisateur }, process.env.JWTKEY, {
                expiresIn: 60
            });
            return {message:"ok",token:token}
        }
    }
    catch (e) {
        return {message:"Une erreur est survenue"}
    }
}

module.exports = {login}
