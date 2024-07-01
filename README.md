# Proyecto de Anime con Next.js, Node JS, Tailwind CSS y la API de Jikan

Este proyecto es una aplicación web construida con Next.js, node Js, Tailwind CSS para el diseño y la API de Jikan para obtener datos de anime. Muestra una lista de todos los registros de anime disponibles en la API de Jikan, permitiendo a los usuarios tener un inicio de sesión, guardando los animes en favoritos y tenerlos almancenados en la sección de su perfil.

## Características
- Backend con node JS y SQL Server.
- Inicio de sesión para los usuarios.
- Registro de sesión para los usuarios.
- Guardar animes en favoritos.
- Perfil de usuario con sus animes favoritos.
- Utiliza Next.js para el enrutamiento dinámico y la renderización del lado del servidor.
- Integra Tailwind CSS para un diseño minimalista y responsivo.
- Interactúa con la API de Jikan para obtener información detallada de anime.
- Permite buscar anime por título.

## Requerimientos
- SQL Server
- Node JS
- Visual Studios

## Configuración
- Crear una base de datos llamada **"AnimeVerse"** y coloca el siguiente script
```sql
-- Crear la tabla de usuarios
CREATE TABLE Usuarios (
    id_usuario INT IDENTITY(1, 1) PRIMARY KEY,
    correo VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);

-- Crear la tabla de favoritos
CREATE TABLE Favoritos (
    id_favorito INT IDENTITY(1, 1) PRIMARY KEY,
    id_usuario INT,
    id_anime INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
```

- Necesitas estas varibles de entorno en la carpeta de **"Server"** y llamarla **".env"**
```bash
ENV_DATABASE=*****
ENV_USER==*****
ENV_PASSWORD==*****
ENV_SERVER==*****
PORT==*****
```

- Necesitas estas varibles de entorno en la carpeta de **"Frontend"** y llamarla **".env.local"**
```bash
NEXT_PUBLIC_ENV_USUARIOS=*******
NEXT_PUBLIC_ENV_FAVORITOS=*******
```
#### *Si quieres probar el proyecto, ponte en contacto conmigo para darte la información de las variables de entorno

## Inicializar el proyecto

### Instalación
- Clona este repositorio en tu máquina local:
```bash
git clone https://github.com/FranciscoMelen10/AnimeVerse_Backend.git
```

- Instala las dependencias del **"Server"**
```bash
cd ./Server
npm i
```

- Instala las dependencias del **"Frontend"**
```bash
cd ./Frontend
npm i
```

- Ejecuta el siguiente comando en el **"Server"**
```bash
cd ./Server
npm run dev
```

- Ejecuta el siguiente comando en el **"Frontend"**
```bash
cd ./Frontend
npm run dev
```

## Demo
https://github.com/FranciscoMelen10/AnimeVerse_Backend/assets/104796963/ac5e79ee-329d-4e72-9d2f-9346d7a2dd7a




