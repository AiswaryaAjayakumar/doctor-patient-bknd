var express=require('express')
var bodyparser=require('body-parser')

var mongoose=require('mongoose')

var {doctorModel}=require('../models/doctorModel')

var doctorRouter=express.Router()


doctorRouter.use(bodyparser.urlencoded({extended:false}))
doctorRouter.use(bodyparser.json())

doctorRouter.post('/read',(req,res)=>{

    var doctorObject= new doctorModel(req.body)

    doctorObject.save(
        (error)=>{
            if(error)
            {
                res.send(error)
            }
            else
            {
                res.json({"status":"success"})
            }
        }
    )
})
doctorRouter.get('/viewall',(req,res)=>{
    var result= new doctorModel.find()
    res.json(result)
})

doctorRouter.post('/search',async(req,res)=>{
    try{
        var result= await doctorModel.find(req.body)
res.json(result)
    }
    catch(error){
        res.send(error)
    }
})
doctorRouter.post('/edit',async(req,res)=>{
    try{
        var result=await doctorModel.findOneAndUpdate({"_id":req.body._id},req.body)
    res.json(result)
    }
    catch(error)
    {
        res.send(error)
    }

})
doctorRouter.post('/delete',async(req,res)=>{
try{
    var result= await doctorModel.findByIdAndDelete({"_id":req.body._id})
    res.json(result)
}
catch(error){
    res.send(error)
}
})


module.exports={doctorRouter}