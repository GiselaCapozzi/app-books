import { createPool } from 'mysql2/promise';
import {
  DATABASE,
  DB_PORT,
  DB_HOST,
  PASSWORD,
  USER
} from '../config.js';
import dotenv from 'dotenv';
dotenv.config();

// Creación de la pool de MySQL
const db = createPool({
  host: DB_HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: DB_PORT,
  connectionLimit: 10 // Número máxiomo de conexiones en la pool
})

db.getConnection((err, connection) => {
  if (err) {
    console.error(`Error connercting to MySQL: ${err}`);
    return;
  }
  console.log(`Connected to MySQL database: ${connection}`);
})

export default db;