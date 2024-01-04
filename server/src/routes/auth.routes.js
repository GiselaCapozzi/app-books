import { Router } from 'express';
import { 
  getUserById, 
  login, 
  register 
} from '../controllers/auth.controllers.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


export const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', verifyToken, getUserById);