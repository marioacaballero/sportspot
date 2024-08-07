# DocumentsController

El `DocumentsController` es un controlador de NestJS que maneja las rutas relacionadas con la gestión de documentos. Este controlador permite subir, descargar y obtener documentos específicos.

## Endpoints

### 1. Obtener Todos los Documentos

- **Ruta:** `GET /documents`
- **Descripción:** Obtiene una lista de todos los documentos disponibles.
- **Respuesta:** Devuelve una lista de documentos.

### 2. Descargar un Documento por ID

- **Ruta:** `GET /documents/download/:id`
- **Descripción:** Descarga un documento específico por su ID.
- **Parámetros:**
  - **Param:** `id` - ID del documento a descargar.
- **Resumen de Operación:** `Download file by id`
- **Respuesta:** El archivo PDF se envía al cliente como una descarga adjunta.

### 3. Subir un Documento

- **Ruta:** `POST /documents/upload`
- **Descripción:** Sube un nuevo documento.
- **Resumen de Operación:** `Upload a new document`
- **Parámetros:**
  - **File:** El archivo a subir, proporcionado en el formulario bajo el campo `file`.
- **Respuesta:** Devuelve el documento guardado en la base de datos.

### 4. Obtener un Documento por ID

- **Ruta:** `GET /documents/:id`
- **Descripción:** Obtiene un documento específico por su ID.
- **Parámetros:**
  - **Param:** `id` - ID del documento a recuperar.
- **Resumen de Operación:** `Get a document by id`
- **Respuesta:** Devuelve el documento con el ID especificado.

## Decoradores y Middleware

- **@UseInterceptors(FileInterceptor):** Intercepta el archivo subido y lo procesa usando Multer.
- **@UploadedFile:** Captura el archivo subido en la petición.
- **@Res:** Permite manipular directamente la respuesta HTTP.
- **@Param:** Extrae parámetros de la ruta.

## Configuración de Multer

- **Storage:** Configurado para almacenar archivos en el directorio `./uploads` con nombres generados aleatoriamente.
- **Filename:** El archivo se renombra con un nombre aleatorio para evitar colisiones y conservar su extensión original.

## Excepciones

- **BadRequestException:** Se lanza si no se sube ningún archivo en el endpoint `uploadFile`.
- **HttpException:** Se lanza si no se encuentra el documento al descargar el archivo.
- **NotFoundException:** Se lanza si no se encuentra el documento al intentar obtenerlo por su ID.

## Ejemplo de DTO

### CreateDocumentDto

```typescript
export class CreateDocumentDto {
  readonly name: string;
  readonly data: Buffer; // Datos del archivo
}
