// Destructurin
const { Router } = require('express');

const hamburguesas = require('../controllers/haburguesa.controller')

const router = Router();

router.get('/BD', hamburguesas.obtenerDB);
router.get('/:id', hamburguesas.obtenerUnaHamburguesa);
router.post('/agregado', hamburguesas.agregarHamburguesas);
router.delete('/:id', hamburguesas.eliminarHamburguesa);
router.put('/:id', hamburguesas.modificarHamburguesa);


module.exports = router;