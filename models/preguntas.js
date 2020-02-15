var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var provinciaSchema = new Schema({
    pregunta:{type:String,trim:true},
    opciones:{type:Array,trim:true},
    conosco:{type:Number,trim:true},
    uso:{type:Number,trim:true}
})
var preguntas = mongoose.model('preguntas',provinciaSchema);

module.exports=preguntas;