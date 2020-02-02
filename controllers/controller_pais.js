var Pais = require('../models/pais'),
    provincia = require('../models/provincia'),
    express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    Pais.find({}, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/create', (req, res) => {
    var body = req.body;
    Pais.insertMany({
        id: body.id,
        nombre: body.nombre,
        moneda: body.moneda,
        superficie: body.superficie,
        idioma: body.idioma,
        nroHabitantes: body.nroHabitantes
    }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })

}).post('/delete', (req, res) => {
    Pais.remove({ nombre: req.body.nombre }, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/search_pais', (req, res) => {
    Pais.find({ id: req.body.id }, (err, docs) => {
        docs.forEach(data => {
            provincia.find({ id_pais: data.id }, (err, docs) => {
                if (err) {
                    console.error(err)
                    throw err;
                }
                res.status(200).json(docs)
    
            })
            if (err) {
                res.status(200).json({ mensaje: "ningun pais con el id" })
            }
        });        
        
    })
})

module.exports = router;




