const {Router} = require('express')
const ApiUsuariosMock = require('../api/usuarios.js')

const apiUsuarios = new ApiUsuariosMock()

const router = Router()

router.post('/popular', async (req, res, next) => {
    try{
        res.json(await apiUsuarios.popular(req.query.cant))
    }catch(err){
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try{
        res.json(await apiUsuarios.listarAll())
    }catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        res.json(await apiUsuarios.listarAll(req.params.id))
    }catch(err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        res.json(await apiUsuarios.listarAll(req.params.id))
    }catch(err){
        next(err)
    }
})




router.use((err, req, res, next) =>{
    const erroresNoEncontrados = [
        "Error al listar: elemento no encontrado",
        "Error al actualizar: elemento no encontrado",
        "Error al borrar: elemento no encontrado",
    ];

    if(erroresNoEncontrados.includes(err.message)){
        res.status(404)
    } else {
        res.status(505)
    }
    res.json({ message: err.message})
})

module.exports = router