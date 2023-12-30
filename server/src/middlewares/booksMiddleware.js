export const verifyData = (req, res, next) => {
  const { titulo, autor, isbn } = req.body;
  
    if (!titulo) {
      return res.status(400).json({
        message: 'El titulo no puede estar vació'
      })
    } else if (!autor) {
      return res.status(400).json({
        message: 'El autor no puede estar vació'
      })
    } else if (!isbn) {
      return res.status(400).json({
        message: 'El isbn no puede estar vació'
      })
    }
  
    // Comprueba que el isbn no tenga más de 13 caracteres
    if (isbn.length > 20) {
      return res.status(400).send('El isbn no puede tener más de 20 caracteres')
    }
  
    next();
  }