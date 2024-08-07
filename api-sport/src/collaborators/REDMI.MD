# CollaboratorsController

El `CollaboratorsController` es un controlador de NestJS que maneja las rutas relacionadas con los colaboradores. Este controlador proporciona endpoints para crear, leer, actualizar y eliminar colaboradores.

## Endpoints

### 1. Crear un Colaborador

- **Ruta:** `POST /collaborators`
- **Descripción:** Crea un nuevo colaborador.
- **Resumen de Operación:** `Create a collaborator`
- **Parámetros:**
  - **Body:** `CreateCollaboratorDto`
    - Debe incluir todos los datos necesarios para crear un colaborador.
- **Respuesta:** Devuelve el colaborador creado.

### 2. Obtener Todos los Colaboradores

- **Ruta:** `GET /collaborators`
- **Descripción:** Obtiene una lista de todos los colaboradores.
- **Resumen de Operación:** `Get all collaborators`
- **Parámetros:**
  - **Query (Opcional):** Puede incluir parámetros de consulta para filtrar o paginar los resultados.
- **Respuesta:** Devuelve una lista de colaboradores.

### 3. Obtener un Colaborador por ID

- **Ruta:** `GET /collaborators/:id`
- **Descripción:** Obtiene un colaborador específico por su ID.
- **Resumen de Operación:** `Get a collaborator by id`
- **Parámetros:**
  - **Param:** `id` - ID del colaborador a recuperar.
- **Respuesta:** Devuelve el colaborador con el ID especificado.

### 4. Actualizar un Colaborador por ID

- **Ruta:** `PATCH /collaborators/:id`
- **Descripción:** Actualiza los datos de un colaborador específico por su ID.
- **Resumen de Operación:** `Update a collaborator by id`
- **Parámetros:**
  - **Param:** `id` - ID del colaborador a actualizar.
  - **Body:** `UpdateCollaboratorDto`
    - Debe incluir los datos que se desean actualizar.
- **Respuesta:** Devuelve el colaborador actualizado.

### 5. Eliminar un Colaborador por ID

- **Ruta:** `DELETE /collaborators/:id`
- **Descripción:** Elimina un colaborador específico por su ID.
- **Resumen de Operación:** `Delete a collaborator by id`
- **Parámetros:**
  - **Param:** `id` - ID del colaborador a eliminar.
- **Respuesta:** Devuelve una confirmación de la eliminación.

## Decoradores de Swagger

- **@ApiTags:** Etiqueta los endpoints para que sean incluidos en la sección de "collaborators" en la documentación de Swagger.
- **@ApiOperation:** Proporciona una breve descripción para cada endpoint en la documentación de Swagger.

## Dependencias

- **NestJS:** Proporciona la infraestructura básica para el controlador.
- **Swagger:** Documenta la API de manera visual.

## Ejemplo de DTO

### CreateCollaboratorDto

```typescript
export class CreateCollaboratorDto {
  readonly name: string;
  readonly email: string;
  readonly position: string;
}
