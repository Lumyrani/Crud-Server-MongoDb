const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();

const { Person } = require("../models/person")

router.get('/', (req, res)=>{
    Person.find((err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retreiving the file :'+ JSON.stringify(err))
        }
    });
});

router.post('/', (req,res)=>{
    const pers = new Person({
        name:req.body.name,
        place:req.body.place,
        state:req.body.state,
        pin:req.body.pin
    });
    pers.save((err,docs)=>{
        if(!err) {res.send(docs);}
        else {  console.log('Error in inserting the file :'+ JSON.stringify(err)) }
    });
} );


router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`no record with given id:${req.params.id}`)
    Person.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc)}
        else {  console.log('Error in finding the file :'+ JSON.stringify(err)) }
    })
})

router.put('/:id',(req,res)=>{
  const id = req.params.id
    // if(!ObjectId.isValid(req.params.id))
    if(!ObjectId.isValid(id))
    return res.send(`no record with given id:${req.params.id}`)

    const pers = {
        name:req.body.name,
        place:req.body.place,
        state:req.body.state,
        pin:req.body.pin
        }

    Person.findByIdAndUpdate(id,{$set:pers},{new:true},(err,doc)=>{

        if(!err){res.send(doc)}
        else {  console.log('Error in updating the tperson :'+ JSON.stringify(err)) }
    })
})


router.delete('/:id',(req,res)=>{
    const id = req.params.id
      // if(!ObjectId.isValid(req.params.id))
      if(!ObjectId.isValid(id))
      return res.send(`no record with given id:${req.params.id}`)
  
      const pers = {
          name:req.body.name,
          place:req.body.place,
          state:req.body.state,
          pin:req.body.pin
          }
  
      Person.findByIdAndRemove(req.params.id,(err,doc)=>{
  
          if(!err){res.send(doc)}
          else {  console.log('Error in deleting the tperson :'+ JSON.stringify(err)) }
      })
  })
  module.exports = router

