import { Router } from 'express';
import { 
  createNewBook, 
  deleteABookById, 
  getAllBooks, 
  getAllBooksUserById, 
  updateAnBookById
} from '../controllers/books.controllers.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { verifyData } from '../middlewares/booksMiddleware.js';

export const router = Router();

router.get('/books_user', getAllBooks);
router.get('/', verifyToken, getAllBooksUserById);
router.post('/', verifyToken, verifyData, createNewBook);
router.put('/:id', verifyToken, verifyData, updateAnBookById);
router.delete('/:id', verifyToken, deleteABookById);