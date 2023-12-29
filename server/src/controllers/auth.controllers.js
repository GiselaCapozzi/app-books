import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/database.js';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {
  try {
    const { username, nombre, apellido, email, password, avatar } = req.body;

    // Comprabando si alguno de los datos que no deben estar vaciós lo estan, y si lo están envía un mensaje de erron y un código 400 (Error del cliente)
    if (!username) {
      return res.status(400).json({
        error: 'El apodo no puede estar vació'
      })
    } else if (!nombre) {
      return res.status(400).json({
        error: 'El nombre no puede estar vació'
      })
    } else if (!apellido) {
      return res.status(400).json({
        error: 'El apellido no puede estar vació'
      })
    } else if (!email) {
      return res.status(400).json({
        error: 'El email no puede estar vació'
      })
    } else if (!password) {
      return res.status(400).json({
        error: 'La contraseña no puede estar vacia'
      })
    }

    if (email) {
      db.query(`SELECT nombre, apellido, email FROM users WHERE email = ?`,
        [email],
        (err, result) => {
          if (err) {
            console.error(`Error al verificar el correo electrónico: ${err}`);
            return res.status(500).send('Error interno del servidor');
          }

          if (result.length > 0) {
            // El correo electrónico ya existe
            return res.status(409).json({
              message: 'El correo electrónico ya está registrado'
            })
          }
        })
    }

    // Genera un hash de la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar un usuario a la base de datos
    const [result] = await db.query(`
      INSERT INTO users (username, nombre, apellido, email, password, avatar)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [username, nombre, apellido, email, hashedPassword, avatar]);

    const token = jwt.sign(
      { id: result.insertId, username, nombre, apellido, email, avatar },
      process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.status(201).json({ token })

  } catch (error) {
    console.error(`Error en el registro: ${error}`);
    return res.status(500).json({
      message: 'Error en el registro'
    })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por correo electrónico
    const [rows] = await db.query(`SELECT * FROM users WHERE email = ?`,
      [email]);

    const user = rows[0];
    console.log(user)

    if (!user) {
      return res.status(401).json({
        error: 'Error en el servidor'
      })
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        error: 'Error en el servidor'
      })
    }

    // Generar token
    const token = jwt.sign({
      id: user.id,
      username: user.username,
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      avatar: user.avatar
    },
      process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.json({ token })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error en el servidor'
    })
  }
}

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query(`
      SELECT username, nombre, apellido, email, avatar FROM users WHERE id = ?
    `, [id]);

    const user = rows[0];

    if (rows.length > 0) {
      res.json(user)
    } else {
      res.status(404).json({
        mensaje: 'Usuario no encontrado'
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error en el servidor'
    })
  }
}