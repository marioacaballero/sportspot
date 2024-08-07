# `InicioNotificaciones` Component

El componente `InicioNotificaciones` es una pantalla que muestra las notificaciones del usuario en una aplicación móvil, permitiendo visualizar, gestionar y actualizar el estado de las notificaciones.

## Importaciones

- **React & React Native**:
  - `React`, `useEffect`, `useState`
  - `Text`, `StyleSheet`, `View`, `Image`, `Switch`, `ScrollView`, `Dimensions`
- **Local Imports**:
  - `Padding`, `Color`, `FontFamily`, `FontSize`, `Border` - constantes para estilos
  - Acciones Redux como `getAlNotificationsByUser`, `udpateNotification`, `deleteEvent`
  - `useTranslation` para la internacionalización

## Estados y Props

- **Estados del Componente**:
  - `isEnabled`: Estado del interruptor que controla si las notificaciones están habilitadas o no.
  
- **Props**:
  - `dispatch`: Para enviar acciones a la tienda Redux.

## Funciones Clave

- **`useEffect()`**:
  - El primer `useEffect` carga las notificaciones del usuario cuando el componente se monta.
  - El segundo `useEffect` marca todas las notificaciones del usuario como leídas cuando llegan nuevas notificaciones.

- **`toggleSwitch()`**: Cambia el estado del interruptor entre habilitado y deshabilitado.

- **`getTimeFromDate(dateString)`**: Convierte una fecha en formato UTC a la hora local y devuelve una cadena de texto con el formato de fecha y hora.

- **`setAllUserNotificationsToRead()`**: Marca todas las notificaciones del usuario como leídas.

## Renderizado

- **Estructura General**:
  - Utiliza un `ScrollView` para permitir el desplazamiento vertical si hay muchas notificaciones.
  - Muestra un ícono y un texto de encabezado con un interruptor para habilitar o deshabilitar las notificaciones.
  - Si no hay notificaciones, muestra un mensaje informando que no hay notificaciones disponibles.
  - Muestra una lista de notificaciones con el título, el mensaje y la fecha formateada para cada una.

## Estilos

- **Contenedores y Vistas**:
  - `frameParent1`: Estilo principal del contenedor del componente con sombra y relleno.
  - `materialSymbolsnotificationsParent`, `frameParent2`, `frameParent5`, entre otros: Estilos para la disposición y los bordes de las vistas internas.

- **Textos**:
  - `helloAshfak6`, `helloAshfak7`, `helloAshfak8`, entre otros: Diferentes estilos de texto aplicados para mejorar la legibilidad y la apariencia.

- **Imágenes y Botones**:
  - `materialSymbolsnotificationsIcon`, `vectorIcon`, `mdibankIcon`, entre otros: Estilos para las imágenes y los íconos en el componente.

- **Interruptor**:
  - `switch`: Estilo específico para el interruptor de habilitación de notificaciones.

## Notas Adicionales

- El componente utiliza `ScrollView` para manejar el desplazamiento de la lista de notificaciones.
- La lógica para marcar las notificaciones como leídas y para gestionar el estado del interruptor está integrada en el componente.
- Los estilos están definidos para proporcionar una apariencia consistente y atractiva a lo largo del componente.

Este README proporciona una visión general de cómo está estructurado y estilizado el componente `InicioNotificaciones`, así como sus principales funcionalidades y el uso de propiedades y estados.
