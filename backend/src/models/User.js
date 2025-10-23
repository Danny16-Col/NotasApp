// esto es lo primero que se hace 
import mongoose from 'mongoose';
import jsrypt from 'jsryptjs';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});