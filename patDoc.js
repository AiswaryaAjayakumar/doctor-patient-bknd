var express=require('express')

var bodyparser=require('body-parser')
var mongoose=require('mongoose')
var {patientModel}=require('./models/patientModel')
var {doctorModel}=require('./models/doctorModel')
var {doctorRouter}=require('./controllers/doctorController')
var {patientRouter}=require('./controllers/patientController')

mongoose.connect("mongodb+srv://AiswaryaAjayakumar:aishumongo123@cluster0.d2zqqet.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})


 var app=express()

 app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.use('/doctor',doctorRouter)
app.use('/patient',patientRouter)

app.get('/',(req,res)=>{

    res.send("Welcome to website")
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Server started at 3000")
})
