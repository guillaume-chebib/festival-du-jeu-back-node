var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/jeu', async function(req, res, next) {
  res.send('respond with a game');
  //TODO: recuperer tous les jeux depuis la db
});

router.post('/jeu', function (req,res,next){
  //TODO: ajouter un jeu à la db
});
module.exports = router;
