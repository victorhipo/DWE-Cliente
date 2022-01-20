//cuado se hagan peticiones a /users
var express = require('express');
var router = express.Router();

/* GET users listing. */
// si se hace una peticion a users/ contesto con un send
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//si se hace una peticion a users/all contesto con un json
router.get('/all',(req, res, next)=>{
  res.json({response:1, message:"respuesta correcta"});
});
module.exports = router;
