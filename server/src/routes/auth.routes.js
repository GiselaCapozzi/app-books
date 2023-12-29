import { Router } from 'express';
import { 
  getUserById, 
  login, 
  register 
} from '../controllers/auth.controllers.js';

export const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserById);