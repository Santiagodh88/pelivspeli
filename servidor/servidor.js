//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var competenciasCtrl = require('./controladores/competenciasControlador');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//GET
app.get("/competencias/resultados", competenciasCtrl.competencia);

app.get("/competencias", competenciasCtrl.cargarCompetencias);

app.get('/competencias/:id/peliculas', competenciasCtrl.obtenerOpciones);

//POST

app.post('/competencias/:id/voto', competenciasCtrl.votar);




//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando en el puerto " + puerto);
});