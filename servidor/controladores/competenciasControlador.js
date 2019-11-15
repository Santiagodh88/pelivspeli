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

function obtenerOpciones(req, res) {
    var data = {}
    let sql = "select nombre from competencias where id = ?";
    var consulta = queryOpciones(req.query);

    con.query(sql, req.params.id, (error, result) => {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(500).send("Hubo un error en la consulta");
        }
        data.competencia = result[0].nombre;
        //    data.peliculas = result

        con.query(consulta, (error, result) => {
            if (error) {
                console.log("Hubo un error en la consulta", error.message);
                return res.status(500).send("Hubo un error en la consulta");
            }
            data.peliculas = result

            res.json(data);
        });
    });
}

function queryOpciones(query) {
    var query = "select id, poster, titulo from pelicula ORDER BY RAND() LIMIT 2";
    return query;
}

module.exports = {
    competencia,
    cargarCompetencias,
    obtenerOpciones
};