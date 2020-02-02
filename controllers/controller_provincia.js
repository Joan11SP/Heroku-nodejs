const provincia = require('../models/provincia'),
    express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    provincia.find({}, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/create', (req, res) => {
    var body = req.body;
    provincia.insertMany({
        nombre: body.nombre,
        nroCantones: body.nroCantones,
        superficie: body.superficie,
        region: body.region,
        id_pais: body.id_pais
    }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })

}).post('/update', (req, res) => {
    var body = req.body;
    provincia.update({ nombre: body.nombre },
        {
            $set: {
                nombre: body.nombre,
                nroCantones: body.nroCantones,
                superficie: body.superficie,
                region: body.region, id_pais: body.id_pais
            }
        }, (err, rest) => {
            if (err) {
                console.error(err)
                throw err;
            }
            res.status(200).json(rest)
        })
}).post('/encon_super', (req, res) => {
    var body = req.body
    provincia.find({superficie:{$gt:body.superficie}},{superficie:1}, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(404).json(rest)

    })
})

module.exports = router;