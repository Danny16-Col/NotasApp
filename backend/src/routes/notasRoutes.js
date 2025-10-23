import express from 'express';
import { getNotas, createNota, updateNota, deleteNota } from '../controllers/notasController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get( '/', protect, getNotas );
router.post( '/', protect, createNota );
router.put( '/:id', protect, updateNota );
router.delete( '/:id', protect, deleteNota );

export default router;