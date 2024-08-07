# writeDataAndDownloadExcelFile

## Descripción

La función `writeDataAndDownloadExcelFile` se encarga de generar un archivo Excel a partir de un conjunto de datos en formato JSON y permitir al usuario descargar y compartir el archivo. Utiliza las bibliotecas `expo-sharing`, `expo-file-system` y `xlsx` para realizar estas tareas.

## Función

### `writeDataAndDownloadExcelFile(data, eventName)`

Esta función realiza las siguientes operaciones:

1. **Generar el Archivo Excel**: Crea un nuevo libro de Excel (`workbook`) y una hoja de cálculo (`worksheet`) a partir de los datos JSON proporcionados.
2. **Convertir a Base64**: Convierte el libro de Excel a una cadena en base64.
3. **Guardar el Archivo Localmente**: Guarda el archivo Excel en el sistema de archivos local del dispositivo.
4. **Compartir el Archivo**: Utiliza el módulo `expo-sharing` para compartir el archivo a través de las opciones disponibles en el dispositivo.

#### Parámetros

- **`data`**: Un array de objetos JSON que representa los datos a incluir en el archivo Excel.
- **`eventName`**: El nombre del evento, que se utiliza para nombrar el archivo Excel.

#### Ejemplo de Uso

```javascript
import { writeDataAndDownloadExcelFile } from './path/to/your/file'

const data = [
  { id: '1', name: 'first' },
  { id: '2', name: 'second' }
]

writeDataAndDownloadExcelFile(data, 'MyEvent')
