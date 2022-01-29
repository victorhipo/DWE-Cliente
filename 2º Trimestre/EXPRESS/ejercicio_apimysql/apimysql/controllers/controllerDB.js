//requerimos mysql (la dependencia).
let mysql = require("mysql");
//creamos un json con dos metodos.
let gestionConexion = {
    // el metodo conexion le indicamos todos los datos para establecer la conexion.
    conxion: () => {
        return mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'api',
            port: 3306,
        })
    },
    // el metodo desconexion donde terminaremos el metodo conexion.
    desconexion: () => { mysql.createConnection().end },
};

module.exports = gestionConexion;