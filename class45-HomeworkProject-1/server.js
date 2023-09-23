import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';


//Load .env variables from .env file
config();
//Access environment variables
const mongodbURI=process.env.MONGODB_URI;

//Create connection with db
mongoose.connect(mongodbURI);
//define today list schema
const todayListSchema=new mongoose.Schema({thing:String,completed:Boolean});
//Create model
const TodayTask=mongoose.model("TodayTask",todayListSchema);

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
    let taskArr=await TodayTask.find();
    let leftEl=taskArr.reduce((acc,item)=>{
        if(item.completed===false)
            acc++;
        return acc;
    },0)
    res.render('index.ejs',{
        items:taskArr,
        left:leftEl,
    });
});
//create list
app.post('/addTodo',(req,res)=>{
    const newTask=new TodayTask({
        thing:req.body.todoItem,
        completed:false,
    });
    newTask.save()
    .then(()=>res.redirect('/'))
    .catch((error)=>console.log(error));
})
//update route for mark complete items
app.put('/markComplete',async(req,res)=>{
    try{
        const response=await TodayTask.updateOne({thing:req.body.itemFromJS},{$set:{completed:true}},{
            sort:{_id:-1},upsert:false
        });
        console.log('Marked Completed');
        res.json('marked Completed')
    }catch(error){
        console.log(error);
    }
});
//update route for markUncomplete items
app.put('/markUnComplete',async(req,res)=>{
    try{
            const response=await TodayTask.updateOne({thing:req.body.itemFromJS},
            {
                $set:{
                    completed:false,
                }
            },{
                sort:{_id:-1},
                upsert:false,
            });
            console.log("UnMarked Completed");
            res.json("unmarked completed");
    }catch(err){
        console.log(err);
    }
});
//for delete items
app.delete('/deleteItem',async(req,res)=>{
    try{
        const result=await TodayTask.deleteOne({thing:req.body.itemFromJS});
        console.log('ToDo Deleted');
        res.json("Todo Deleted");
    }catch(err){
        console.log(err);
    }
})

//listen the port
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});