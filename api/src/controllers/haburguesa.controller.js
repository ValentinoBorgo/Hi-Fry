
const { getConnection } = require('../database/database.js');


// let hamburguesas = [
//     {
//         id: 1,
//         burger: 'Doble ChesseBurger',
//         img: 'https://andigital.com.ar/media/k2/items/cache/1d9e5fc5a4515a80b4e564048c2de0a6_XL.jpg',
//         precio: 1700,
//         carnes: 2,
//         chedar: 4,
//         pan: 1,
//         ingredientes: "salsa hi"
//     },
//     {
//         id: 2,
//         burger: 'Triple Baconator',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAbNsyNJHQlpk3S03lyX9jcKyOL5FZINHZJD2so93XuyaiPtdHmDxV5a3k9RM7v4_PuM&usqp=CAU',
//         precio: 2400,
//         carnes: 3,
//         chedar: 6,
//         pan: 1,
//         ingredientes: ["ketchup ", "bacon"]
//     },
//     {
//         id: 3,
//         burger: 'Classic',
//         img: 'https://julieblanner.com/wp-content/uploads/2020/02/all-american-burger.jpg',
//         precio: 2000,
//         carnes: 1,
//         chedar: 2,
//         pan: 1,
//         ingredientes: ["lechuga ", "tomate ", "cebolla ", "salsa hi"]
//     },
//     {
//         id: 4,
//         burger: 'Blue ChesseBurger',
//         img: 'https://www.derrickriches.com/wp-content/uploads/2017/09/Depositphotos_73953517_XL-scaled-e1655678858132.jpg',
//         precio: 2200,
//         carnes: 2,
//         chedar: "Queso azul",
//         pan: 1,
//         ingredientes: "cebolla caramelizada"
//     }
// ];




// const obtenerTodos = async (req, res) => {
//     res.json(hamburguesas);
// }

const obtenerDB = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT id, burger, img, precio, carnes, chedar, pan, ingredientes from hamburguesa');
        console.log(result);
        res.status(200).json(result).end();
    } catch (error) {
        // This status means internal server error
        res.status(500);
        console.log(error);
    }
}


const obtenerUnaHamburguesa = async (req, res) => {

    console.log(req.params);
    const { id } = req.params;

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT id, burger, img, precio, carnes, chedar, pan, ingredientes from hamburguesa WHERE id = ?', id);

        if (result == '') {
            res.status(500).json("This burger doesnt exists");
        }
        
        console.log(result);
        res.status(200).json(result).end();
    } catch (error) {
        // This status means internal server error
        res.status(500);
        console.log(error);
    }
}


const agregarHamburguesas = async (req, res) => {
    try {
        const { burger, img, precio, carnes, chedar, pan, ingredientes } = req.body;

        if (burger == undefined || img == undefined || precio == undefined || carnes == undefined || chedar == undefined || pan == undefined || ingredientes == undefined) {
            return res.status(400).json({ error: 'Bad request, Please fill all fields' });
        }

        const hamburguesa = { burger, img, precio, carnes, chedar, pan, ingredientes };

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO hamburguesa SET ?', hamburguesa);
        console.log(result);
        console.log(agregado);
        console.log('-----------------------------');
        console.log(agregado.content);
        res.status(201).json("Agregaste pa").end();
    } catch (error) {
        // This status means internal server error
        res.status(500);
        console.log(error);
    }
}

const eliminarHamburguesa = async (req, res) =>{
    try{
        const {id} = req.params;

        const connection = await getConnection();
        const result = await connection.query('DELETE FROM hamburguesa WHERE id = ?', id);

        console.log(result);
        response.status(204).end();        
    }catch(error){
        res.status(500).json(error);
    }
}

const modificarHamburguesa = async (req, res) =>{
    try{
        const {id} = req.params;
        const {burger, img, precio, carnes, chedar, pan, ingredientes } = req.body;

        if (id == undefined || burger == undefined || img == undefined || precio == undefined || carnes == undefined || chedar == undefined || pan == undefined || ingredientes == undefined) {
            return res.status(400).json({ error: 'Bad request, Please fill all fields' });
        }

        const parameter = {burger, img, precio, carnes, chedar, pan, ingredientes };

        const connection = await getConnection();
        const result = await connection.query('UPDATE hamburguesa SET  ? WHERE id = ?',[parameter, id]);

        console.log(result);
        response.status(204).end();        
    }catch(error){
        res.status(500).json(error);
    }
}



module.exports = {
    obtenerDB,
    agregarHamburguesas,
    obtenerUnaHamburguesa,
    eliminarHamburguesa,
    modificarHamburguesa
};