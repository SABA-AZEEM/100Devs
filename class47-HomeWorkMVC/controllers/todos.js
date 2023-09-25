import MyTodo from '../models/Todo.js';

const obj={
    getTodos:async (req,res)=>{
        try{
            const todoItems=await MyTodo.find();
            const itemsLeft=await MyTodo.countDocuments({completed:false});
            res.render('todos.ejs',{todos:todoItems,left:itemsLeft});
        }catch(err){
            console.log(err)
        }
    },
    createTodo:async (req,res)=>{
        try{
            await MyTodo.create({todo:req.body.todoItem,completed:false});
            console.log('Todo has been added!');
            res.redirect('/todos');
        }catch(err){
            console.log(err);
        }
    },
    markComplete:async(req,res)=>{
        try{
            const obj=await MyTodo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{completed:true});
            console.log('Marked Completed');
            res.json('marked Completed');
        }catch(err){
            console.log(err);
        }
    },
    markIncomplete:async (req,res)=>{
        try{
            await MyTodo.findByIdAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed:false,
            });
            console.log('Marked Incomplete');
            res.json('Marked Incomplete');
        }catch(err){
            console.log(err);
        }
    },
    deleteTodo:async(req,res)=>{
        try{
            await MyTodo.findByIdAndDelete({_id:req.body.todoIdFromJSFile});
            console.log('Deleted Todo');
            res.json('Deleted It');
        }catch(err){
            console.log(err);
        }
    }
    
}

export default obj;