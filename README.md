# Patrón Modelo - Vista - Controlador

El patrón de diseño Modelo - Vista - Controlador separa una aplicación en 3 componentes

## Modelo (Model):

Represental los datos y la lógica del negocio de la aplicación. Es responsable de gestionar los datos y proporcionar métodos para acceder, crear, actualizar y eliminar **********************************(CRUD)********************************** la información.

## Vista (View):

Es la interfaz de usuario que presenta los datos al usuario y recibe las interacciones del usuario, como clicks en botones o entradas de formularios.

## Controlador (Controller):

El Controlador actúa como intermediario entre el Modelo y la Vista. Recibe las interacciones del usuario (como clics en botones o envío de formularios), procesa esas solicitudes y toma decisiones en función de la entrada del usuario. A partir de esta toma de decisiones, el Controlador interactúa con el Modelo para obtener los datos necesarios y finalmente selecciona la Vista adecuada para presentar esos datos al usuario.

Actúa como intermediario entre **************Modelo************** y **********Vista.********** Responde a las interacciones del usuario y actualiza el ************Modelo************ y a la **********Vista********** según sea necesario, manteniendo la separación entre los datos y la interfaz de usuario.

## **Funcionamiento del Patrón MVC:**

Cuando un usuario interactúa con una aplicación basada en el patrón MVC, el flujo general es el siguiente:

1. El usuario realiza una acción, como hacer clic en un botón o enviar un formulario.
2. El Controlador recibe la acción y la procesa. Puede actualizar el Modelo según la acción realizada por el usuario.
3. El Controlador solicita al Modelo los datos necesarios para satisfacer la acción del usuario.
4. El Modelo se comunica con la base de datos u otras fuentes de datos para obtener los datos requeridos.
5. El Modelo entrega los datos al Controlador.
6. El Controlador selecciona la Vista apropiada y le pasa los datos.
7. La Vista utiliza los datos proporcionados por el Controlador para generar la interfaz visual que se presenta al usuario.

# Proyecto - Red Social

## Dependencias

Este proyecto requiere que se instalen las siguientes dependencias:

- `express`
- `ejs`

## Estructura de archivos

El proyecto tiene la siguiente estructura de archivos:

```
project/
│
├── app/
│   └── models/
│   └── views/
│   └── controllers/
│   └── routes/
│
├── .gitignore
└── README.md
```

## Base de datos
Usuarios (Users):

1. id (clave primaria)
- nombre de usuario
- correo electrónico
- contraseña (hash)
- fecha de registro

2. Publicaciones (Posts):
- id (clave primaria)
- contenido
- fecha de publicación
- usuario_id (clave foránea que referencia el id de Usuarios)

3. Comentarios (Comments):
- id (clave primaria)
- scontenido
- fecha de comentario
- usuario_id (clave foránea que referencia el id de Usuarios)
- publicacion_id (clave foránea que referencia el id de Publicaciones)

4. Seguidores (Followers):
- id (clave primaria)
- seguidor_id (clave foránea que referencia el id de Usuarios, el usuario que sigue)
- seguido_id (clave foránea que referencia el id de Usuarios, el usuario seguido)