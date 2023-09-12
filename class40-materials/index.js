import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

// Use import.meta.url to get the current module's URL
const __filename = fileURLToPath(import.meta.url);

// Use dirname to get the directory name
const __dirname = dirname(__filename);
const app=express();
app.use(cors());
const PORT=8000;
//object
const student={
    "saba data":{
        name:'Saba Azeem',
        class:14,
        age:24
    },
    "sara data":{
        name:'Sara Azeem',
        class:13,
        age:25
    },
    "sana data":{
        name:'Sana Azeem',
        class:16,
        age:26
    },
    "unknown":{
        name:'unknown',
        class:'unknown',
        age:'unknown',
    },
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name',(req,res)=>{
    const stuName=req.params.name;
    if(student[stuName]){
        res.json(student[stuName]);
    }else{
        res.json(student['unknown']);
    }
    
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is starting on port : ${PORT}`);
})