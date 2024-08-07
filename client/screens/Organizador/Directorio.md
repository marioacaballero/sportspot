# `Directorio.js`

## Descripción

El componente `Directorio` es una pantalla en una aplicación React Native que muestra una lista de eventos con una funcionalidad de búsqueda. Utiliza Redux para gestionar el estado global y la navegación para redirigir a los detalles del evento seleccionado.

## Funcionalidades

- **Conexión con Redux**: Obtiene datos de eventos y del usuario desde el estado global.
- **Barra de Búsqueda**: Permite filtrar eventos por título en tiempo real.
- **Navegación**: Redirige a una pantalla de detalles cuando se selecciona un evento.

## Dependencias

- `react`
- `react-native`
- `react-redux`
- `@react-navigation/native`
- `i18next`
- Componentes SVG personalizados (`BackArrowSVG`, `FolderSVG`, `LupaSVG`)

## Estados

El componente utiliza los siguientes estados:

- **`searchText`**: Almacena el texto introducido en la barra de búsqueda. Se actualiza a medida que el usuario escribe en el campo de búsqueda.

## Estilos

- **Colores**: Utiliza colores definidos en `Color` (e.g., `Color.blanco`, `Color.sportsVioleta`).
- **Fuentes**: Emplea fuentes especificadas en `FontFamily` y tamaños en `FontSize`.

## Instrucciones de Uso

1. **Importar**: Asegúrate de importar el componente en tu archivo de navegación o donde se necesite en tu aplicación.
2. **Conectar con Redux**: Asegúrate de tener configurado el store de Redux para que el componente pueda acceder al estado global.
3. **Navegación**: Configura la navegación para redirigir a la pantalla de detalles del evento cuando se seleccione un evento.

## Notas

- La búsqueda de eventos se realiza en función del título y se actualiza automáticamente mientras se escribe en la barra de búsqueda.
- Asegúrate de que los componentes SVG utilizados estén correctamente importados y disponibles en la ruta especificada.

