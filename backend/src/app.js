import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import notasRoutes from './routes/notasRoutes.js';


const app = express();

// Coneccion a la base de datos
connectDB();
// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/auth')
app.use('/api/notes', notasRoutes );


export default app;