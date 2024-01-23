# DOCUMENTACIÓN DEL PROYECTO:
## Biblioteca Virtual

1. Introducción
1.1 Objetivo del proyecto
La Biblioteca Virtual es una plataforma web que permite a los usuarios una vez registrados poder crear libros a través de un formulario, obtener sus libros agregados, actualizarlos y borrarlos, lo cual le permitirá guardar de forma virtual una lista de libros que posee.

1.2 Tecnologías utilizada
- React con Vite para el frontend
- Redux Toolkit para la gestión de estado
- TailwindCSS para los estilos
- MySQL como base de datos relacional
- JWT para la autenticación y autorización
- Netlify para el despliegue del frontend
- Vercel para el despliegue del backend
- Render para la base de datos

```
2. Arquitectura
/app-books
├── client
│   ├── src
|   │   ├── assets
│   │   ├── components
│   │   ├── containers
│   │   ├── context
│   │   ├── hooks
│   │   ├── service
│   │   ├── slice
│   │   └── store
│   ├── public
│   ├── package.json
│   ├── index.html
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server
│   ├── src
│       ├── controllers
│       ├── database
│       ├── middlewares
│       └── routes
│   ├── package.json
│    ├── vercel.json
│   └── index.js
└── README.md
```