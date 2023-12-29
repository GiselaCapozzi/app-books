import { Router } from 'express';
import { getAllBooksUserById } from '../controllers/books.controllers.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

export const router = Router();

router.get('/', verifyToken, getAllBooksUserById)