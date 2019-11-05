var con = require("../lib/conexionbd.js")

function competencia(req, res) {
    console.log("Llego a la competencia")
    res.json({ "r": true })
}


module.exports = {
    competencia
};