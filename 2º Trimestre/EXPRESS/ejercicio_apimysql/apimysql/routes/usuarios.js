var express = require('express');
var router = express.Router();
let gestionConexion = require('../controllers/controllerDB');

/* GET ALL users listing. */
router.get('/selectAll', function (req, res, next) {
  //conectar con DB y realiza la petición.

  let conexionActual = gestionConexion.conxion();

  conexionActual.connect((err) => {

    if (err) {

      res.status(500).send({ code: 1, message: 'Error en la conexion', error: err });
      //query
    } else {

      conexionActual.query('SELECT * FROM  usuarios', null, (err, data) => {

        if (err) {

          res.status(300).send({ code: 2, message: 'Query ejecutada con error', error: err });
        } else {

          res.status(200).send({ code: 2, message: 'Datos correctos', results: data });
        }
      });

      conexionActual.end();
    }
  });
});

// obtener el elemento cuyo id esta indicado en la ruta.
router.get('/SelectById/:id', function (req, res, next) {

  //variables para sacar los paramatros de la url
  let id = req.params.id;

  // establecemos conexion con la BD
  let conexionActual = gestionConexion.conxion();

  conexionActual.connect((err) => {

    if (err) {
      //  Error de conexion
      res.status(500).send({ code: 1, message: 'Error en la conexion', error: err });
      //query
    } else {

      if (id == undefined) {

        res.status(300).send({ code: 2, message: 'Faltan datos en la peticion.', error: err });
      }
      else {

        conexionActual.query('SELECT * FROM usuarios WHERE id = (?)', [id], (err, data) => {

          if (err) {

            res.status(300).send({ code: 2, message: 'Query ejecutada con error.', error: err });
          } else {

            res.status(200).send({ code: 2, message: 'Datos procesados correctamente:', results: data, numero: data.length });
          }
        });
      }

      conexionActual.end();
    }
  });
});

module.exports = router;
