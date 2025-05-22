import express, { request, response } from "express";
import routerApi from "./routers/index.js";
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT;

// creo la aplicacion de express
const app = express();

// Middleware
// Soporte para json, para que pueda trabajar y traer json
app.use(express.json());

// Directorio estatico
app.use(express.static('public'));

// Pagina principal
app.get('/', (request, response)=>{
    response.send('<h1>Home</h1>')
})

// llamamos a el routerApi
routerApi(app);

// escucha en el servidor
app.listen(port, ()=>{
    console.log(`Servidor en el puerto ${port}`)
})