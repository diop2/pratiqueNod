//Import
var express = require('express');


//instantiation du serveur
var server = express();

//configuration des routes
server.get('/',function(req, res){
res.setHeader('Content-Type','text/html');
res.status(200).send('<h1>Bonjour mon serveur</h1>');
});

//Lancé le serveur
server.listen(8000,function(){
    console.log('server');
})