-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,  -- Deberías almacenar una versión hash de la contraseña
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Publicaciones (Posts)
CREATE TABLE IF NOT EXISTS Publicaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

-- Tabla de Comentarios (Comments)
CREATE TABLE IF NOT EXISTS Comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT,
    publicacion_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (publicacion_id) REFERENCES Publicaciones(id)
);

-- Tabla de Seguidores (Followers)
CREATE TABLE IF NOT EXISTS Seguidores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seguidor_id INT,
    seguido_id INT,
    FOREIGN KEY (seguidor_id) REFERENCES Usuarios(id),
    FOREIGN KEY (seguido_id) REFERENCES Usuarios(id)
);