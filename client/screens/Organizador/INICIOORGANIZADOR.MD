# `InicioOrganizador.js`

## Descripción

El componente `InicioOrganizador` es una pantalla en una aplicación React Native destinada a la gestión y publicación de eventos. Permite al usuario interactuar con modales para acceder a funciones de organización y publicar eventos. Utiliza Redux para la gestión del estado y React Navigation para la navegación entre pantallas.

## Funcionalidades

- **Gestión de Modales**: Permite abrir y cerrar modales para acceso de organizador y publicación de eventos.
- **Navegación**: Facilita la navegación hacia otras pantallas como la de publicación de eventos.
- **Integración con Redux**: Utiliza el estado global para determinar el rol del usuario y gestionar el estado de visibilidad de los modales.
- **Vinculación Externa**: Ofrece botones para abrir URLs, enviar correos electrónicos y realizar llamadas telefónicas.

## Dependencias

- `react`
- `react-native`
- `react-redux`
- `@react-navigation/native`
- `react-i18next`
- Componentes SVG personalizados (`WebSVG`, `MensajeSVG`, `ContactoSVG`)
- Componente `AccesoOrganizadorModal` para mostrar modales de acceso

## Estados

El componente utiliza los siguientes estados:

- **`modalVisible`**: Controla la visibilidad del modal para el acceso de organizador.
- **`publishModalVisible`**: Controla la visibilidad del modal para la publicación de eventos.

## Estilos

- **Colores**: Utiliza colores definidos en `Color` (e.g., `Color.blanco`, `Color.sportsNaranja`, `Color.sportsVioleta`).
- **Fuentes**: Emplea fuentes especificadas en `FontFamily` y tamaños en `FontSize`.
- **Diseño**: Incluye estilos para la disposición de botones, imágenes y textos, ajustados para una experiencia de usuario coherente y atractiva.

## Instrucciones de Uso

1. **Importar**: Asegúrate de importar el componente en el archivo de navegación o en el lugar adecuado de tu aplicación.
2. **Conectar con Redux**: Verifica que el store de Redux esté configurado para que el componente pueda acceder al estado global.
3. **Configurar Navegación**: Establece las rutas necesarias en la navegación para redirigir a las pantallas adecuadas, como la de publicación de eventos.
4. **Modales**: Configura los modales de acuerdo con el estado del usuario y las funcionalidades disponibles.

## Notas

- El componente muestra contenido condicionalmente basado en el rol del usuario y su estado (e.g., acceso de organizador).
- Asegúrate de que los componentes SVG y las imágenes estén correctamente importados y ubicados en las rutas especificadas.
- Los botones de vinculación externa permiten abrir URLs, enviar correos electrónicos y realizar llamadas, asegurando que las acciones se manejen adecuadamente.
