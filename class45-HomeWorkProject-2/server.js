import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';

//Load .env variables from .env file
config();
//Access environment variables
const mongodbURI=process.env.MONGODB_URI;

//Create connection with db
mongoose.connect(mongodbURI);
//define Notes Schema
const NoteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please! check title,it is not specified'],
    },
    note:{
        type:String,
        required:[true,'Please! check note,it is not specified.'],
    }
});
//create model
const Note=mongoose.model("Note",NoteSchema);

const app=express();
app.set('view-engine','ejs');
//for body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//set public folder as a static folder
app.use(express.static('public'));
const PORT=3000;

//root route
app.get('/',async(req,res)=>{
    let noteArr=await Note.find();
    res.render('index.ejs',{
        notes:noteArr,
    });
});
//add data into database route
app.post('/submit',async(req,res)=>{
    const newNote=new Note({
        title:req.body.title,
        note:req.body.note,
    });
    try{
        const result=await newNote.save();
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
});
//delete data from data base
app.delete('/deleteItem/:id',async(req,res)=>{
    try{
        const result=await Note.deleteOne({_id:req.params.id});
        console.log("Item deleted")
        res.json("item Deleted");
    }catch(err){
        console.log(err);
    }
})
//update data from data base
app.put('/update',async(req,res)=>{
    try{
        const response=await Note.updateOne({_id:req.body._id},
        {
            $set:{
                title:req.body.title,
                note:req.body.note,
            }
        },{
            upsert:false,
        })
        res.json('update successfully')
    }catch(err){
        console.log(err);
    }
})

//listen to the client
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
});