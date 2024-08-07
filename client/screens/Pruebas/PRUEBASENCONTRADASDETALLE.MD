# PruebasEncontradasDetalle Component

## Descripción

El componente `PruebasEncontradasDetalle` muestra los detalles de un evento específico y permite interactuar con diversas funcionalidades relacionadas con el evento. Los usuarios pueden ver información detallada del evento, compartirlo, agregarlo a favoritos, suscribirse a notificaciones y dejar reseñas. Dependiendo de los permisos del usuario y del estado del evento, también se pueden realizar otras acciones como editar el evento o eliminarlo.

## Funcionalidades

- **Mostrar Detalles del Evento**: Muestra información del evento como título, ubicación, fecha, descripción y más.
- **Compartir Evento**: Permite compartir el evento a través de un enlace.
- **Agregar a Favoritos**: Los usuarios pueden marcar el evento como favorito.
- **Suscribirse a Notificaciones**: Los usuarios pueden suscribirse para recibir notificaciones sobre el evento.
- **Dejar Reseñas**: Los usuarios pueden dejar reseñas sobre el evento.
- **Editar Evento**: Los organizadores pueden editar los detalles del evento.
- **Eliminar Evento**: Los organizadores pueden eliminar el evento.

## Props

El componente no recibe props directamente, pero se basa en la navegación y en la configuración global del estado de la aplicación.

## Hooks Utilizados

- `useState`: Para manejar el estado local del componente.
- `useEffect`: Para manejar efectos secundarios y actualizar el estado basado en cambios de datos.
- `useFocusEffect`: Para realizar acciones específicas cuando el componente está en foco.
- `useTranslation`: Para la internacionalización del contenido.
- `useRoute`: Para acceder a los parámetros de la ruta de navegación.

## Redux Actions y Selectores

- **Acciones**:
  - `favorite`: Marca un evento como favorito.
  - `getUser`: Obtiene los detalles del usuario.
  - `visitEvent`: Marca un evento como visitado.
  - `deleteEvent`: Elimina un evento.
  - `getAllEvents`: Obtiene todos los eventos.
  - `getAllEventsInscriptions`: Obtiene todas las inscripciones de eventos.
  - `getSuscribedEventsNotifications`: Obtiene las notificaciones de eventos suscritos.

- **Selectores**:
  - `user`: Datos del usuario actual.
  - `eventFavorites`: Eventos marcados como favoritos por el usuario.
  - `users`: Lista de usuarios.
  - `event`: Evento específico cargado.
  - `sports`: Lista de deportes.
  - `events`: Lista de eventos.
  - `suscribedEventsNotifications`: Notificaciones de eventos suscritos.
  - `eventInscriptions`: Inscripciones de eventos.

## Funciones Principales

- **`handleDelete(id)`**: Muestra un diálogo de confirmación para eliminar el evento y lo elimina si se confirma.
- **`handleFavorite()`**: Alterna el estado de favorito para el evento actual.
- **`onShare(id, title)`**: Comparte el evento a través de un enlace.
- **`suscribeNotifications()`**: Se suscribe o desuscribe a las notificaciones del evento.
- **`transformPlaces(places)`**: Transforma la cantidad de lugares disponibles en una cadena legible.
- **`isEventAlreadyAdded()`**: Verifica si el usuario ya está inscrito en el evento.
- **`isUserPostReview()`**: Verifica si el usuario ha dejado una reseña para el evento.

## Modales

- **`ModalSuscription`**: Muestra un modal para suscribirse a notificaciones del evento.
- **`EscribirResea`**: Permite al usuario escribir una reseña para el evento.
- **`EditEvent`**: Permite al organizador editar el evento.

## Componentes Importados

- `Image`, `Modal`, `Pressable`, `ScrollView`, `StyleSheet`, `Text`, `TouchableOpacity`, `TouchableWithoutFeedback`, `View`, `Share`, `Alert`, `ToastAndroid`, `PermissionsAndroid`, `Platform`, `Linking`: Componentes y APIs de React Native.
- `ActivityIndicator`: Indicador de carga de `react-native-paper`.
- `MaterialCommunityIcons`: Iconos de `react-native-vector-icons`.
- `useDispatch`, `useSelector`: Hooks de `react-redux`.
- `EditEvent`, `EscribirResea`, `ModalSuscription`, `CardReview`: Componentes personalizados.
- `axiosInstance`: Instancia de axios para realizar peticiones HTTP.
- `useTranslation`, `i18next`: Herramientas para internacionalización.

## Uso

Este componente se utiliza para mostrar los detalles de un evento y proporcionar al usuario varias opciones para interactuar con el evento. Es parte de una aplicación que maneja eventos deportivos y permite a los usuarios participar en ellos de diversas maneras.

## Dependencias

- `react`
- `react-native`
- `react-native-paper`
- `react-redux`
- `react-i18next`
- `react-navigation`
- `axios`
- `react-native-vector-icons`

## Estilos

Los estilos se definen utilizando `StyleSheet` de React Native y están organizados en un objeto `styles` para facilitar su mantenimiento y reutilización.

