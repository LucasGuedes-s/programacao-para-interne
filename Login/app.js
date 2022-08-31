const express = require('express');
const app = express();

//Define a pasta onde irão ficar as views 
app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.static('./public')); // Define a pasta public para conteúdo estático 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const session = require('express-session');

app.set('trust proxy', 1);
app.use(session({
    secret: '3a578703b77728e4a3620a24611950d5f1f649f4', //?Super$#90R
    resave: true,
    saveUninitialized: true,
    cookie: false
}));

const routers = require('./routers/routers');
app.use(routers);
const hostname = 'localhost';
const port = 900;

//Inicia o servidor
app.listen(port, hostname, ()=>{
    console.log(`Servidor iniciado em http://${hostname}:${port} (Clique Ctrl+C)`);
});