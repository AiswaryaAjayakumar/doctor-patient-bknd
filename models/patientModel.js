
var mongoose=require('mongoose')

var patientSchema=new mongoose.Schema(
    {
        code:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        addr:{
            type:String,
            required:true
        },
        no:{
            type:Number,
            required:true
        },
        symptoms:{
            type:String,
            required:true
        },
        disease:{
            type:String,
            required:true
        },
        blood:{
            type:String,
            required:true
        },
        place:{
            type:String,
            required:true
        },
        pin:{
            type:Number,
            required:true
        }
    }
)
var patientModel=mongoose.model('patients',patientSchema)

module.exports={patientModel}
