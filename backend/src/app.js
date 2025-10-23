import express from 'express';
import cors from 'cors';
import notasRoutes from './routes/notasRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/notes', notasRoutes);

export default app;
