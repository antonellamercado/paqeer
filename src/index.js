//importar librerias
const express = require('express');
const app = express();
const {dbConection} = require('./databases/config');
//para usar las variables de entorno en toda la app
require ('dotenv').config();
//conectar bd
dbConection();
//inicializar servidor
app.listen(process.env.PORT, () => console.log(`Servidor levantado en ${process.env.PORT}`));
