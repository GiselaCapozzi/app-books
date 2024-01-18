import db from '../database/database.js';

// Obtiene los libros ingresados por los usuarios con sus respectivos datos
export const getAllBooks = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT users.username, users.nombre, users.apellido, users.email, users.avatar,
      books.*
      FROM users
      INNER JOIN books ON users.id = books.user_id
    `);

    res.json(rows)
  } catch (err) {
    res.status(500).json({
      error: 'Error en el servidor'
    })
  }
}

// Obtiene los libros que tiene un usuario según su id
export const getAllBooksUserById = async (req, res) => {
  try {
    const userId = req.user.id;

    const [rows] = await db.query(`
      SELECT * FROM books WHERE user_id = ? 
    `, [userId]);

    // if (rows.length < 1) {
    //   return res.status(204).json({

    //   })
    // }

    return res.json(rows);

  } catch (error) {
    res.status(500).json({
      error: 'Error en el servidor'
    })
  }
}

// Crea un nuevo libro
export const createNewBook = async (req, res) => {
  const {
    titulo,
    autor,
    isbn,
    publicacion_year,
    editorial,
    paginas,
    portada,
    sinopsis
  } = req.body;

  const userId = req.user.id;

  // Comprueba si se encuentra el libro por el titulo antes de agregarlo
  const [result] = await db.query(`
    SELECT titulo FROM books WHERE titulo = ?
  `, [titulo])

  if (result.length === 1) return res.status(302).json({
    message: 'Ese libro ya se encuentra agregado'
  })

  try {
    const [result] = await db.query(`
      INSERT INTO books (titulo, autor, isbn, publicacion_year, editorial, paginas, portada, sinopsis, user_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [titulo, autor, isbn, publicacion_year, editorial, paginas, portada, sinopsis, userId]);

    console.log(result)

    res.json({
      message: 'Libro creado con exito'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: error
    })
  }
}

// Actualiza el libro por su Id
export const updateAnBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      titulo,
      autor,
      isbn,
      publicacion_year,
      editorial,
      paginas,
      portada,
      sinopsis
    } = req.body;

    const [result] = await db.query(`
      UPDATE books SET titulo = ?, autor = ?, isbn = ?, publicacion_year = ?, editorial = ?, paginas = ?, portada = ?, sinopsis = ?
      WHERE id = ?
    `, [titulo, autor, isbn, publicacion_year, editorial, paginas, portada, sinopsis, id]);

    if (result.affectedRows === 0) return res.status(401).json({
      message: 'Libro no encontrado'
    })

    res.json({
      message: 'Libro actualizada con exito',
      result
    })
  } catch (error) {
    res.status(500).json({
      error: 'Error en el servidor'
    })
  }
}

// Elimina un libro por su Id
export const deleteABookById = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query(`
      DELETE FROM books WHERE id = ?
    `, [id])

    if (result.affectedRows === 0) return res.status(404).json({
      error: 'Libro no encontrado'
    })

    res.json({
      message: 'Libro borrado con exito',
      result
    })
  } catch (error) {
    res.status(500).json({
      error: 'Error en el servidor'
    })
  }
}