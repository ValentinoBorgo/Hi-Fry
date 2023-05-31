
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
        res.status(201).json("Hamburguesa agregada efectivamente").end();
    } catch (error) {
        res.status(500);
        console.log(error);
    }
}

const eliminarHamburguesa = async (req, res) => {
    try {
        const { id } = req.params;

        const connection = await getConnection();
        const result = await connection.query('DELETE FROM hamburguesa WHERE id = ?', id);

        console.log(result);
        response.status(204).end();
    } catch (error) {
        res.status(500).json(error);
    }
}

const modificarHamburguesa = async (req, res) => {
    try {
        const { id } = req.params;
        const { burger, img, precio, carnes, chedar, pan, ingredientes } = req.body;

        if (id == undefined || burger == undefined || img == undefined || precio == undefined || carnes == undefined || chedar == undefined || pan == undefined || ingredientes == undefined) {
            return res.status(400).json({ error: 'Bad request, Please fill all fields' });
        }

        const parameter = { burger, img, precio, carnes, chedar, pan, ingredientes };

        const connection = await getConnection();
        const result = await connection.query('UPDATE hamburguesa SET  ? WHERE id = ?', [parameter, id]);

        console.log(result);
        response.status(204).end();
    } catch (error) {
        res.status(500).json(error);
    }
}

const guardarHamburguesaM = async (req, res) => {
    try {

        const { idM, burgerM, precioM, carnesM, chedarM, ingredientesM, llaveidM } = req.body;

        if (idM == undefined ||  burgerM == undefined || precioM == undefined || carnesM == undefined || chedarM == undefined ||  ingredientesM == undefined || llaveidM == undefined) {
            return res.status(400).json({ error: 'Bad request, Please fill all fields' });
        }

        const hamburguesaM = {idM, burgerM, precioM, carnesM, chedarM, ingredientesM, llaveidM};

        const connection = await getConnection();
        const result = await connection.query('INSERT INTO hamburguesam SET ?', hamburguesaM);
        res.status(201).json("HamburguesaM agregada efectivamente").end();
    }catch(error){
        res.status(500);
        console.log(error);
    }
}

const guardarEnLista = async (req,res) =>{
    const connection = await getConnection();
    try{
        const result = [];
        const key = [];

        for(let i = 0; i < req.body.length; i++){
            result.push(req.body[i].id || req.body[i].idM);
            key.push(req.body[i].llave || req.body[i].llaveidM);
        }

        res.json(result.concat(key));
        
        // const { id, burger, precio, carnes, chedar, ingredientes, llave } = req.body;
        // const { idM, burgerM, precioM, carnesM, chedarM, ingredientesM, llaveidM } = req.body;

        // if ((burger == undefined || id == undefined || precio == undefined || carnes == undefined || chedar == undefined || llave == undefined || ingredientes == undefined) && (burgerM == undefined || idM == undefined || precioM == undefined || carnesM == undefined || chedarM == undefined || llaveidM == undefined || ingredientesM == undefined)) {
        //     return res.status(400).json({ error: 'Bad request, Please fill all fields' });
        // }

        // const hamburguesa = {id, llave};
        // const hamburguesaM = {idM, llaveidM};

        // const result = await connection.query('INSERT INTO listahamburguesa SET ?', [hamburguesa, hamburguesaM], (error, results) =>{
        //     if (error) throw error;
        //     res.status(201).json("Lista ✔️ "+ results).end();
        // });

    }catch(error){
        await connection.query('ROLLBACK');
        res.status(500);
        console.log(error);
    }
}



module.exports = {
    obtenerDB,
    agregarHamburguesas,
    obtenerUnaHamburguesa,
    eliminarHamburguesa,
    modificarHamburguesa,
    guardarHamburguesaM,
    guardarEnLista
};