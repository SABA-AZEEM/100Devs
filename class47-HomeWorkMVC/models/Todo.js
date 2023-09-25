import mongoose from "mongoose";

const TodoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        required:true,
    }
})
export default mongoose.model('MyTodo',TodoSchema);