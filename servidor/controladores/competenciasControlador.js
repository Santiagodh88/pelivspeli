var con = require("../lib/conexionbd.js")

function cargarCompetencias(req, res) {
    var data = {}
    var consulta = queryCompetencias(req.query);
    con.query(consulta, (error, result) => {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(500).send("Hubo un error en la consulta");
        }
        //data = result;
        res.json(result);
    });

}


function competencia(req, res) {

    res.json({ "r": true })
}

function queryCompetencias(query) {
    var query = "select * from competencias.competencias";
    return query;
}

module.exports = {
    competencia,
    cargarCompetencias
};