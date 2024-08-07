# `InicioDeportista` Component

El componente `InicioDeportista` es una pantalla principal de la aplicación de eventos deportivos, diseñado para mostrar una lista de eventos y permitir la inscripción en ellos.

## Importaciones

- **React & React Native**:
  - `React`, `Component`
  - `View`, `Text`, `Pressable`, `ScrollView`, `ActivityIndicator`, `Image`, `StyleSheet`, `Dimensions`
- **Third-Party Libraries**:
  - `LinearGradient` from `expo-linear-gradient`
- **Local Imports**:
  - `Color`, `FontFamily`, `FontSize`, `Padding`, `Border` - constantes para estilos
  - Acciones Redux como `setShowGuestModal`, `setEventSelected`
  - `Navigation` para la navegación entre pantallas

## Estados y Props

- **Estados del Componente**:
  - `event`: Información del evento actual.
  - `user`: Información del usuario actual.
  - `available`: Indica si el evento está disponible para inscripciones.
  - `isGuest`: Indica si el usuario es un invitado.
  - `lastHours`, `latestEventsAdded`, `eventsExpired`: Listas de eventos por categoría.

- **Props**:
  - `navigation`: Usado para navegar a otras pantallas.
  - `dispatch`: Para enviar acciones a la tienda Redux.

## Funciones Clave

- **`render()`**: La función principal que gestiona el renderizado del contenido del componente. Incluye:
  - La visualización de eventos según la disponibilidad y el estado del usuario.
  - La presentación de un indicador de carga si no hay eventos disponibles.
  - Un botón para inscripciones que solo aparece si el evento está disponible y el usuario no es el creador.

- **`handlePress()`**: Maneja la navegación hacia la pantalla de inscripción o muestra un modal para invitados, dependiendo del estado del usuario.

## Estilos

- **Contenedores y Vistas**:
  - `linearGradient`: Fondo con un degradado que se aplica a toda la pantalla.
  - `frameGroupFlexBox`, `frameGroupSpaceBlock`, `helloAshfakParent`, entre otros: Estilos para la disposición de los componentes y el texto en el componente.

- **Textos**:
  - `helloTypo`, `imGoingToTypo`, `minTypo1`, entre otros: Diferentes estilos de texto aplicados en el componente para mejorar la legibilidad y la estética.

- **Imágenes y Botones**:
  - `image94ParentShadowBox`, `image94ParentShadowBox1`, entre otros: Estilos para contenedores de imágenes con sombras y bordes redondeados.
  - `button`: Estilos específicos para el botón de inscripción, incluyendo el color de fondo y la disposición.

## Notas Adicionales

- El componente utiliza `LinearGradient` para aplicar un fondo de degradado a la pantalla.
- La lógica para mostrar el botón de inscripción y el indicador de carga depende del estado del evento y del usuario.
- Los estilos están definidos para una apariencia consistente y atractiva a lo largo de la interfaz.

Este README proporciona una visión general de cómo está estructurado y estilizado el componente `InicioDeportista`, así como sus principales funcionalidades y el uso de propiedades y estados.
