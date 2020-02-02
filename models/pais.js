var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var paisSchema = new Schema({
    id:{type:Number,trim:true},
    nombre:{type:String,trim:true},
    moneda:{type:String,trim:true},
    superficie:{type:Number,trim:true},
    idioma:{type:String,trim:true},
    nroHabitantes:{type:Number,trim:true}
})
var pais = mongoose.model('pais',paisSchema);

module.exports=pais;