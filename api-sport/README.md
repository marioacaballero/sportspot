## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Desarrollo del Back-End

## Tablas y Relaciones en la Base de Datos:

### 1. Usuarios:

- Campos:

  ```JSON
   "id": Clave primaria, identificador único del usuario.
   "name": Nombre del usuario.
   "email": Correo electrónico del usuario.
   "password": Contraseña del usuario (hash).
   Otros campos según sea necesario.
  ```

- Relaciones:

  - Relación con Eventos:

    - Tipo: Uno a muchos (Un usuario puede crear múltiples eventos, pero un evento solo puede tener un creador).
    - Clave Foránea: id_usuario en la tabla de Eventos.

  - Relación con Notificaciones:
    - Tipo: Uno a muchos (Un usuario puede recibir múltiples notificaciones).
    - Clave Foránea: (notifications)id_usuario en la tabla de Notificaciones.

### 2. Deporte:

- Campos:

  ```JSON
   "id": Clave primaria, identificador único del deporte.
   "name": Nombre del deporte.
   "type":tipo de deporte.
   "descripción": Descripción del deporte.
   Otros campos según sea necesario.
  ```

- Relaciones:
  - Relación con Eventos:
    - Tipo: Uno a muchos (Un deporte puede estar asociado con múltiples eventos).
    - Clave Foránea: id_deporte en la tabla de Eventos.

### 3. Notificaciones:

- Campos:

  ```JSON
   "id": Clave primaria, identificador único de la notificación.
   "id_usuario": Clave foránea que hace referencia al usuario al que se dirige la notificación.
   "title": titulo de la notificacion.
   "message": Contenido del mensaje de la notificación.
   "date": Fecha en que se creó la notificación.
   "eventType": tipo de evento al cual pertenece la notificacion.
   "eventId": clave foranera del evento al cual pertenece.
   "recipientId": clave foranera del usuario al cual esta destinada.
   "read": Estado de la notificación (leída/no leída).
   "tipo_de_notificación": (opcional) Tipo de notificación (por ejemplo, tipo de evento relacionado).
   -Otros campos según sea necesario.
  ```

- Relaciones:

  - Relación con Usuarios:
    - Tipo: Muchos a uno (Múltiples notificaciones pueden estar dirigidas a un usuario).
    - Clave Foránea: id_usuario de la tabla de Usuarios.
  - Relación con Eventos:
    - Tipo: Muchos a uno (Una notificación puede estar asociada con un evento).
    - Clave Foránea: id_evento de la tabla de Eventos.

### 4. Eventos:

- Campos:

  ```JSON

   "id": Clave primaria, identificador único del evento.
   "title": Título del evento.
   "description": Descripción del evento.
   "modality": Modalidad del evento
   "imagen_del_evento": Imagen relacionada con el evento.(ver como)
   "price": Precio del evento.
   "location": Ubicación donde se llevará a cabo el evento.
   "dateStart": Fecha de inicio del evento.
   "dateInscription": Fecha de cierre de la inscripcion del evento.
   "sport": Clave foránea que hace referencia al deporte al que está asociado el evento.
   "userId": Clave foránea que hace referencia al usuario creador del evento.
   -Otros campos según sea necesario.
  ```

- Relaciones:
  - Relación con Usuarios:
    - Tipo: Muchos a uno (Un evento solo puede tener un creador).
    - Clave Foránea: id_usuario en la tabla de Usuarios.
  - Relación con Deporte:
    - Tipo: Muchos a uno (Un evento está asociado con un único deporte).
    - Clave Foránea: id_deporte en la tabla de Deporte.

## Comentarios

- Esta estructura de base de datos proporciona una base sólida para la aplicación de eventos deportivos y debería ser flexible para adaptarse a futuras expansiones o modificaciones.
