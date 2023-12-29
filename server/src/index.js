import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import { router as AuthRoutes } from './routes/auth.routes.js';
import { router as BooksRoutes } from './routes/book.routes.js';

// Se carga las variables de entorno desde el archivo .env
dotenv.config();

// Se crea una instancia de la aplicación Express
const app = express();

app.set('port', process.env.PORT || 4500); // Puerto en donde se ejecutará el servidor o el valor por defecto 4500

// Middleware: express.json() para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Middleware: Morgan para registrar solicitudes HTTP en la consola
app.use(morgan('dev'));

// Middleware: CORS para permitir solicitudes desde todos los origenes
app.use(cors({
  'methods': ['GET', 'POST', 'PUT', 'DELETE'],
  'origin': ['http://localhost:5173']
}))

app.use('/auth', AuthRoutes);
app.use('/books', BooksRoutes);

// Inicio del servidor
app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:${app.get('port')}`)
})