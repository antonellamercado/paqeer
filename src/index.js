//importar librerias
const express = require('express');
const app = express();
//para usar las variables de entorno en toda la app
require ('dotenv').config();
//conectar bd
const {dbConection} = require('./databases/config');
dbConection();
//inicializar servidor
app.listen(process.env.PORT, () => console.log(`Servidor levantado en ${process.env.PORT}`));
