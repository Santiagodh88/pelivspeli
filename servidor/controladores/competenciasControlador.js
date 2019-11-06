var con = require("../lib/conexionbd.js")

function competencia(req, res) {

    res.json({ "r": true })
}


function cargarCompetencias(req, res) {

    res.json({ "r": true })
}


module.exports = {
    competencia,
    cargarCompetencias
};