var express = require('express');
var router = express.Router();

var controller = require("../controller/commentaire_controller")

router.post('/', async function(req, res, next) {
    try {
        await controller.createCommentaireById(req.body)
        res.status(200).json({message:"success"})

    }
    catch (e) {
        res.status(500).json({ message: "can't add data" });
    }

});


module.exports = router;
