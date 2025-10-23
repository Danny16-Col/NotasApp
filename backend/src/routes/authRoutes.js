//esta es la tercera parte y van las rutas 

import express from 'express';
import { register, login } from '../controllers/authControler.js';

const router = express.Router();

//ruta de registro
router.post('/register', register);

//ruta de login
router.post('/login', login);

export default router;
