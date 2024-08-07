# EventsController

El `EventsController` es un controlador de NestJS que maneja las rutas relacionadas con la gestión de eventos. Este controlador permite la creación, actualización, eliminación, y consulta de eventos, así como la gestión de suscriptores y notificaciones.

## Endpoints

### 1. Crear un Evento

- **Ruta:** `POST /events/`
- **Descripción:** Crea un nuevo evento.
- **Parámetros:**
  - **Body:** `CreateEventDto` - DTO que contiene los detalles del evento.
- **Resumen de Operación:** `Create event`
- **Respuesta:** El evento creado.

### 2. Marcar Evento como Visitado

- **Ruta:** `POST /events/visit`
- **Descripción:** Marca un evento como visitado por un usuario.
- **Parámetros:**
  - **Body:** `eventId` - ID del evento, `userId` - ID del usuario.
- **Resumen de Operación:** `Events visited by a user`
- **Respuesta:** Resultado de la operación de marcar el evento como visitado.

### 3. Obtener Todos los Eventos

- **Ruta:** `GET /events`
- **Descripción:** Obtiene una lista de todos los eventos.
- **Parámetros:**
  - **Query:** Cualquier parámetro de consulta para filtrar los eventos.
- **Resumen de Operación:** `Get all events`
- **Respuesta:** Lista de eventos.

### 4. Obtener Eventos Visitados por un Usuario por Fecha

- **Ruta:** `GET /events/visit-event`
- **Descripción:** Obtiene eventos visitados por un usuario en base a un filtro de fecha (día, semana, mes).
- **Parámetros:**
  - **Query:** `userId` - ID del usuario, `filter` - Filtro de fecha.
- **Resumen de Operación:** `Events visited by a user by date`
- **Respuesta:** Lista de eventos visitados filtrados por fecha.

### 5. Obtener Eventos Favoritos por ID

- **Ruta:** `GET /events/favorites/:id`
- **Descripción:** Obtiene todos los eventos favoritos para un usuario dado el ID.
- **Parámetros:**
  - **Param:** `id` - ID del usuario.
- **Resumen de Operación:** `Find all favorite events`
- **Respuesta:** Lista de eventos favoritos.

### 6. Obtener un Evento por ID

- **Ruta:** `GET /events/:id`
- **Descripción:** Obtiene un evento específico por su ID.
- **Parámetros:**
  - **Param:** `id` - ID del evento.
- **Resumen de Operación:** `Find one event by id`
- **Respuesta:** Detalles del evento con el ID especificado.

### 7. Actualizar un Evento por ID

- **Ruta:** `PATCH /events/:id`
- **Descripción:** Actualiza un evento específico por su ID.
- **Parámetros:**
  - **Param:** `id` - ID del evento.
  - **Body:** `UpdateEventDto` - DTO que contiene los detalles a actualizar.
- **Resumen de Operación:** `Patch one event by id`
- **Respuesta:** El evento actualizado.

### 8. Eliminar un Evento por ID

- **Ruta:** `DELETE /events/:id`
- **Descripción:** Elimina un evento específico por su ID.
- **Parámetros:**
  - **Param:** `id` - ID del evento.
- **Resumen de Operación:** `Remove one event by id`
- **Respuesta:** Resultado de la operación de eliminación.

### 9. Obtener Eventos Suscritos por Usuario

- **Ruta:** `GET /events/subscribed/:userId`
- **Descripción:** Obtiene todos los eventos a los que un usuario está suscrito.
- **Parámetros:**
  - **Param:** `userId` - ID del usuario.
- **Resumen de Operación:** `Get all subscribed events for a user`
- **Respuesta:** Lista de eventos suscritos por el usuario.

### 10. Obtener Suscriptores de un Evento

- **Ruta:** `GET /events/subscribers/:eventId`
- **Descripción:** Obtiene todos los suscriptores de un evento específico.
- **Parámetros:**
  - **Param:** `eventId` - ID del evento.
- **Resumen de Operación:** `Get all subscribers for an event`
- **Respuesta:** Lista de suscriptores del evento.

### 11. Finalizar un Evento y Notificar a los Suscriptores

- **Ruta:** `POST /events/finalize/:eventId`
- **Descripción:** Finaliza un evento y notifica a los suscriptores.
- **Parámetros:**
  - **Param:** `eventId` - ID del evento.
- **Resumen de Operación:** `Finalize an event and notify subscribers`
- **Respuesta:** Mensaje de éxito de la finalización del evento y envío de notificaciones.

### 12. Crear Notificaciones de Ubicación de Evento

- **Ruta:** `POST /events/event-location`
- **Descripción:** Crea un evento con notificaciones de ubicación.
- **Parámetros:**
  - **Body:** `CreateEventDto` - DTO que contiene los detalles del evento.
- **Resumen de Operación:** `Create event`
- **Respuesta:** El evento creado con detalles de ubicación.

### 13. Suscribirse a un Evento

- **Ruta:** `POST /events/subscribe/:userId/:eventId`
- **Descripción:** Suscribe a un usuario a un evento específico.
- **Parámetros:**
  - **Param:** `userId` - ID del usuario, `eventId` - ID del evento.
- **Resumen de Operación:** `Subscribe to an event`
- **Respuesta:** Resultado de la operación de suscripción.

### 14. Obtener Notificaciones de Eventos Suscritos

- **Ruta:** `GET /events/notifications/:userId`
- **Descripción:** Obtiene las notificaciones de eventos suscritos para un usuario.
- **Parámetros:**
  - **Param:** `userId` - ID del usuario.
- **Resumen de Operación:** `Get subscribed events notifications`
- **Respuesta:** Lista de eventos suscritos con notificaciones.

### 15. Notificar a los Suscriptores de un Evento

- **Ruta:** `POST /events/notify/:eventId`
- **Descripción:** Envía una notificación a los suscriptores de un evento específico.
- **Parámetros:**
  - **Param:** `eventId` - ID del evento.
  - **Body:** `message` - Mensaje de notificación, `title` - Título de la notificación.
- **Resumen de Operación:** `Notify event subscribers`
- **Respuesta:** Resultado del envío de la notificación.

## Decoradores y Middleware

- **@ApiTags:** Etiqueta para la documentación Swagger.
- **@ApiOperation:** Describe la operación para la documentación Swagger.
- **@Param:** Extrae parámetros de la ruta.
- **@Body:** Extrae el cuerpo de la solicitud.
- **@Query:** Extrae parámetros de consulta.
- **@Res:** Permite manipular directamente la respuesta HTTP.

## Ejemplo de DTO

### CreateEventDto

```typescript
export class CreateEventDto {
  readonly name: string;
  readonly date: Date;
  readonly location: string;
  readonly description: string;
  // Otros detalles del evento
}
