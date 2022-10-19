var express=require('express')

var mongoose=require('mongoose')
var bodyparser=require('body-parser')

var {patientModel}=require('../models/patientModel')

var patientRouter=express.Router()

patientRouter.use(bodyparser.urlencoded({extended:false}))
patientRouter.use(bodyparser.json())




patientRouter.post('/read',(req,res)=>{

    var patientObject=new patientModel(req.body)

    patientObject.save(
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

patientRouter.get('/viewall',async(req,res)=>{
    try{

        var result=await patientModel.find()
    res.json(result)
    }
    catch(error)
    {
    res.send(error)
    }
    
    })
    
    patientRouter.post('/search',async(req,res)=>{
        try{
            var result= await patientModel.find(req.body)
            res.json(result)
        }
        catch(error){
            res.send(error)
        }
        
        
    })
    patientRouter.post('/edit',async(req,res)=>{
    
        try{
        
            var result= await patientModel.findOneAndUpdate({"_id":req.body._id},req.body)
            res.json(result)
        }
        catch(error){
            res.send(error)
        }
    })
    patientRouter.post('/delete',async(req,res)=>{
        
        try{
            var result= await patientModel.findByIdAndDelete({"_id":req.body._id})
            res.json(result)
        }
        catch(error){
            res.send(error)
        }
    })

    module.exports={patientRouter}