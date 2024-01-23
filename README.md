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

# Configuración del entorno

1. Clonar el repositorio
```
git clone https://github.com/GiselaCapozzi/app-books.git
cd app-books
```

## Frontend

2. Moverse a la carpeta client
```
cd client
```

3. Instalar dependencias
```
npm install
```

4. Ejecutar la aplicación
```
npm run dev
```

## Backend

2. Moverse a la carpeta server
```
cd server  
```

3. Instalar dependencias
```
npm install
```

4. Configurar las variables de entorno en un archivo '.env'
```
DB_PORT=3306
DB_HOST=b8jnrwjuc4wvf9hqepbw-mysql.services.clever-cloud.com
USER=uv6jqsi3mwyv95ux
PASSWORD=i64FKab2j4dlvLjdgCHa
DATABASE=b8jnrwjuc4wvf9hqepbw
JWT_SECRET=superultrasecreto
```

5. Ejecutar el servidor
```
npm run dev
```

# Configuración de la Base de Datos
1. Acceder a [Render](https://dashboard.render.com/) y crear una nueva base de datos MySQL
2. Utliza las credenciales proporcionadas para configurar las variables de entorno en el backend

# Despliegue
## Frontend Netlify

1. Crea una cuenta en Netlify
2. Desde el directorio 'client' ejecuta:
```
npm run build
```
3. Despliega el directorio 'build' en Netlify

## Backend (Vercel)
1. Crea una cuenta en Vercel
2. Configura el despliegue automático desde tu repositorio de backend en Vercel
3. Y configura las variables de entorno del backend

# Capturas de pantalla

## Frontend
