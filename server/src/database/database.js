import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// Creación de la pool de MySQL
const db = createPool({
  host: process.env.HOST,
  user: process.env.USER || '',
  password: process.env.PASSWORD || '',
  database: process.env.DATABASE || '',
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