const app = require('./app.js')
// importa la app.

app.listen(app.get('port'), ()=>{
    console.log(`!! Server is active in port ${app.get('port')} !!`);
});