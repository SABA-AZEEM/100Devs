import express from 'express';
const app=express();
import connectDB from './config/database.js';
import homeRoutes from './routes/home.js';
import todoRoutes from './routes/todos.js';

import dotenv from 'dotenv';
dotenv.config({path:'./config/.env'});
connectDB();
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',homeRoutes);
app.use('/todos',todoRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
});
