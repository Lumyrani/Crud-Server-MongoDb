const mongoose =require ('mongoose')

mongoose.connect("mongodb://localhost:27017/cruddb",(err)=>{
    if(!err){
        console.log('connection succeeded')

    }
    else{
        console.log("Error in db", JSON.stringify(err))
    }

})