
const { getConnection } = require('../database/database.js');


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