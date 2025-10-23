import User from './User.js';
import mongoose from 'mongoose';


const notasSchema = new mongoose.Schema( {
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    completed:{
        type:Boolean,
        default:false
    },
    dueDate: Date,
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

},{timestamps:true});

const Notas = mongoose.model( 'Notas', notasSchema );

export default Notas;