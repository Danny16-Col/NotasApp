import express from 'express';
import { getNotas, createNota, updateNota, deleteNota } from '../controllers/notasControler.js'
import protect from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.get( '/', protect, getNotas );
router.post( '/', protect, createNota );
router.put( '/:id', protect, updateNota );
router.delete( '/:id', protect, deleteNota );

export default router;