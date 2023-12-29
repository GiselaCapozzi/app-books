import db from '../database/database.js';

export const getAllBooksUserById = async (req, res) => {
  try {
    const userId = req.user.id;

    const [rows] = await db.query(`
      SELECT * FROM books WHERE user_id = ? 
    `, [userId]);

    if(rows.length < 1) {
      return res.status(204).json({
        message: 'No hay ningun libro aún agregado'
      })
    }

    return res.json(rows);

  } catch (error) {
    res.status(500).json({
      error: 'Error en el servidor'
    })
  }
}