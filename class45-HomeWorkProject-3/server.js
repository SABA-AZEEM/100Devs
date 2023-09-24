import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';

//Load .env variables from .env file
config();
//Access environment variables
const mongodbURI=process.env.MONGODB_URI;

//Create connection with db
mongoose.connect(mongodbURI);
//define blog web schema
const blogWebSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter title of the post'],
    },
    content:{
        type:String,
        required:[true,'Please enter post,then submit'],
    },
});
//Create model for blogWebSchema
const Blog=mongoose.model("Blog",blogWebSchema);

const app=express();
app.set('view-engine','ejs');
//use express as body parser setup
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//set public folder as a static folder
app.use(express.static('public'));
const PORT=8000;


//root route for all posts
app.get('/',async(req,res)=>{
    let blogPosts=await Blog.find();
    res.render('index.ejs',{
        posts:blogPosts,
    });
});
//When click read more button then this route work
app.get('/posts/:id',async(req,res)=>{
    const id=req.params.id;
    let post=await Blog.findById(id);
        res.render('post.ejs',{
            title:post.title,
            content:post.content,
            id:post._id,
        });
});
//if user click on header's compose button
app.get('/compose',(req,res)=>{
    res.render('compose.ejs');
});
//when publish the post in compose tab
app.post('/compose',async(req,res)=>{
    const newPost=new Blog({
        title:req.body.postTitle,
        content:req.body.postBody,
    });
    try{
        const result=await newPost.save();
        res.redirect('/');
    }catch(error){
        console.log(error);
    }
});
//route for contact button
app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
});
//route for about button
app.get('/about',(req,res)=>{
    res.render("about.ejs");
})
//route for delete
app.delete('/del/:id',async(req,res)=>{
    try{
        const result=await Blog.deleteOne({_id:req.params.id});
        console.log("Item deleted");
        res.json("item deleted");
    }catch(err){
        console.log(err);
    }
});
//update post
app.put('/update',async(req,res)=>{
    try{
        const response=await Blog.updateOne({_id:req.body.id},
            {
                $set:{
                    title:req.body.title,
                    content:req.body.content,
                }
            },{
                    upsert:false,
            });
            res.json('update successfully');
    }catch(err){
        console.log(err);
    }
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is started on PORT ${PORT}`);
});