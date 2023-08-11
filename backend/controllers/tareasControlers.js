const asyncHandler = require('express-async-handler')

const getTareas = asyncHandler( async(req, res) => {
    res.status(200).json({message: 'Obtener Tareas'})
})

const setTarea = asyncHandler( async(req, res) =>{
    if(!req.body.texto){
        res.status(400)
        throw new Error ('Falta el texto')
    } else {
        res.status(201).json({message: `Crear Tarea ${req.body.texto}`})
    }
})

const updateTarea = asyncHandler( async(req, res) =>{
    res.status(200).json({message: `Modificar Tarea ${req.params.id}`})
})

const deleteTarea = asyncHandler( async(req, res) =>{
    res.status(200).json({message: `Borrar Tarea ${req.params.id}`})
})

module.exports = {
    getTareas,
    setTarea,
    updateTarea,
    deleteTarea
}