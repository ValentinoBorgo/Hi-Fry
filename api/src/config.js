const {config} = require('dotenv');
// Esta funcion pone a disposicion nuestros archivos cargados en el .env

config();

module.exports = {
    host : process.env.HOST || '',
    database : process.env.DATABASE || '',
    user : process.env.USER || '' 
};