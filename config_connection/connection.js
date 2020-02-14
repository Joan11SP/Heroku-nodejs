var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb+srv://Bruja:1925BscJp@cluster0-hp4pe.mongodb.net/Prueba?retryWrites=true&w=majority');

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado a mongodb')
})

module.exports=connection;
