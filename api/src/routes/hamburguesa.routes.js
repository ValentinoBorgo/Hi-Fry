// Destructurin
const { Router } = require('express');

const hamburguesas = require('../controllers/haburguesa.controller')

const router = Router();

router.get('/BD', hamburguesas.obtenerDB);
router.get('/:id', hamburguesas.obtenerUnaHamburguesa);
router.post('/agregado', hamburguesas.agregarHamburguesas);
router.delete('/:id', hamburguesas.eliminarHamburguesa);
router.put('/:id', hamburguesas.modificarHamburguesa);

// Crear la app utilizando express

// middleware is a function that runs in the middle of the process 
// of handling HTTP requests and responses

// router.use(cors({
//     origin: 'http://localhost:5173' // Solo permite solicitudes de https://example.com
//   }));
// // This is a librari of expres for parsing the data from the method POST. 
// router.use(express.json());
// // MIDDLEWARE
// router.use(logger);

// let hamburguesas = [
//     {
//         id : 1,
//         burger : 'Doble ChesseBurger',
//         img : 'https://andigital.com.ar/media/k2/items/cache/1d9e5fc5a4515a80b4e564048c2de0a6_XL.jpg',
//         price : 1700,
//         carnes : 2,
//         chedar : 4,
//         ingredientes : "salsa hi"
//     },
//     {
//         id : 2,
//         burger : 'Triple Baconator',
//         img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAbNsyNJHQlpk3S03lyX9jcKyOL5FZINHZJD2so93XuyaiPtdHmDxV5a3k9RM7v4_PuM&usqp=CAU',
//         price : 2400,
//         carnes : 3,
//         chedar : 6,
//         ingredientes : ["ketchup ","bacon"]
//     },
//     {
//         id : 3,
//         burger : 'Classic',
//         img : 'https://julieblanner.com/wp-content/uploads/2020/02/all-american-burger.jpg',
//         price : 2000,
//         carnes : 1,
//         chedar : 2,
//         ingredientes : ["lechuga ","tomate ","cebolla ","salsa hi"]
//     },
//     {
//         id : 4,
//         burger : 'Blue ChesseBurger',
//         img : 'https://www.derrickriches.com/wp-content/uploads/2017/09/Depositphotos_73953517_XL-scaled-e1655678858132.jpg',
//         price : 2200,
//         carnes : 2,
//         chedar : "Queso azul",
//         ingredientes : "cebolla caramelizada"
//     }
// ];


// // const app = http.createServer((request, response) => {
// //     response.writeHead(200,{'Content-Type' : 'application/json'})
// //     response.end(JSON.stringify(hamburguesas))
// // })


// // ENDPOINTS.
// //GET method if for obtain data from the api
// router.get('/', (request, response) => {
//     response.send('<h1>Hello world</h1>');
// });

// router.get('/api/hamburguesas', (request, response) =>{
//     response.json(hamburguesas);
// })

// // Los 2 puntos significan que es algo dinamico
// router.get('/api/hamburguesas/:id', (request, response) =>{
//     // I have to transform the request so that i take it as a number.
//     const id = Number(request.params.id);
//     // find the burga i pass for the param.
//     const burga = hamburguesas.find(burga => burga.id == id)
//     if(burga){
//         response.json(burga);
//     }else{
//         // if the burga isnt exist, trow an error 404 and finish.
//         response.status(404).end();
//     }
// })

// //DELETE method if for delete data
// router.delete('/api/hamburguesas/:id', (request, response) =>{
//     const id = Number(request.params.id);
//     hamburguesas = hamburguesas.filter(burga => burga.id != id);
//     response.status(204).end();
// })

// // POST method allows me to add a hamburger.
// router.post('/api/hamburguesas', (request, response) =>{
//     const burga = request.body;

//     if(!burga || !burga.content){
//         return response.status(404).json({error : 'Burga.content is missing'});
//     }

//     // Find all the ids
//     const ids = hamburguesas.map(burga => burga.id);
//     // Serch for te max id of all.
//     const idMax = Math.max(...ids);

//     const nuevaBurga = {
//         id : idMax + 1,
//         // it wotks without the content and import.
//         content : burga.content,
//         import : typeof burga.important != 'undefined' ?  burga.important :  false,
//         burger : 'Tasty Double',
//         img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUo0YTynIsvkErR4WZZe1WXTCm6_-z-tDl51r0LLsg06TstXmn4q3P4yo5rG8zrEBAlY&usqp=CAU',
//         price : 2500,
//         carnes : 2,
//         chedar : 4,
//         ingredientes : ["cebolla caramelizada","tomate","lechuga"]
//     }

//     hamburguesas = [...hamburguesas, nuevaBurga]

//     response.status(201).json(nuevaBurga);
// })


// router.use((request, response) =>{
//     console.log(request.path);
//     response.status(404).json({
//         error : 'Not Found'
//     })
// })

module.exports = router;