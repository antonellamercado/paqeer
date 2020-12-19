const mongoose = require('mongoose');

//conexion con DB
const dbConection = async () => {
    try {
    mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex:true
})
console.log('BD Conectada');
} catch (error) {
    console.log('Error', error);
}}

module.exports = {dbConection}