const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {
    const {q,nombre = 'no name',apikey,page=2,limit} = req.query
    res.status(403).json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}
const usuariosPost = (req, res = response) => {
    const {nombre,edad} = req.body;
    res.status(404).json({
        msg:'post API - controlador',
        nombre,
        edad
    })
} 
const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.status(403).json({
        msg:'put API - controlador',
        id 
    })
}
const usuariosDelete = (req, res = response) => {
    res.status(403).json({
        msg:'delete API - controlador'
    })
}
module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}