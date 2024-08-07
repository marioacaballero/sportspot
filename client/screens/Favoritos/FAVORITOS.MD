# `Favoritos` Component

## Descripción

El componente `Favoritos` muestra una lista de eventos deportivos favoritos del usuario. Permite al usuario ver eventos, marcar como favoritos y crear alertas para eventos específicos. Utiliza Redux para manejar la actualización de favoritos y eventos, y está integrado con React Navigation para la navegación entre pantallas.

## Importaciones

- **react**:
  - `useState`: Hook para gestionar el estado del componente.
- **react-redux**:
  - `useDispatch`, `useSelector`: Hooks para despachar acciones y seleccionar el estado desde Redux.
- **react-native**:
  - `Text`, `StyleSheet`, `View`, `Image`, `Pressable`, `Modal`, `TouchableWithoutFeedback`, `ScrollView`, `TouchableOpacity`: Componentes y utilidades para construir la interfaz y manejar eventos.
- **@react-navigation/native**:
  - `useNavigation`: Hook para la navegación entre pantallas.
- **../../GlobalStyles**:
  - Contiene estilos globales como fuentes, colores, y bordes.
- **../../components/PopupAlerta**: Componente para mostrar alertas.
- **../../components/SVG/BackArrowSVG**: Componente SVG para el ícono de flecha de regreso.
- **react-native-vector-icons/MaterialCommunityIcons**: Iconos de Material Community.
- **expo-linear-gradient**: `LinearGradient` para crear fondos degradados.
- **../../redux/actions/users**: Acciones para manejar favoritos y obtener usuarios desde Redux.
- **../../redux/actions/events**: Acción para registrar la visita a un evento.
- **../../redux/slices/events.slices**: Acción para obtener un evento por ID desde Redux.
- **i18next**: Función `t` para la traducción de textos.

## Props

- **`route`**: Parámetros de navegación que incluyen la información sobre el deporte y eventos favoritos.

## Estado

- **`modalVisible`**: Booleano para controlar la visibilidad del modal de alerta.

## Funciones

- **`toggleModal`**: Alterna la visibilidad del modal de alerta.
- **`toggleFavorite`**: Maneja el cambio en el estado de favorito de un evento. Despacha la acción `favorite` y actualiza el estado del usuario, luego navega a la pantalla de favoritos.

## Estructura

- **`LinearGradient`**: Fondo degradado que envuelve el contenido.
- **`View` Principal**: Contenedor principal que incluye:
  - **`ScrollView`**: Permite desplazar la lista de eventos.
  - **Encabezado**: Muestra el título "Tus Favoritos".
  - **Lista de Eventos**: Muestra cada evento con su imagen, descripción, modalidad, ubicación, fechas y precio. Incluye un botón para marcar el evento como favorito.
  - **Modal de Alerta**: Permite crear una alerta para el evento, visible al presionar un ícono de alerta.

## Estilos

- Los estilos están definidos en el objeto `styles` usando `StyleSheet.create`. Incluyen:
  - **Contenedor principal**: Configura el diseño general del componente.
  - **Encabezado y texto**: Estilos para el título y la información de los eventos.
  - **Evento**: Estilos para el contenedor del evento, la imagen, y la información del evento.
  - **Botón de alerta**: Estilo para el botón que muestra el modal de alerta.
  - **Modal**: Estilo para el overlay del modal y su contenido.

## Notas

- El componente utiliza Redux para manejar la información de favoritos y eventos.
- La función `toggleFavorite` actualiza el estado de favoritos y redirige a la pantalla de favoritos.
- El modal de alerta se puede mostrar u ocultar al presionar el botón correspondiente.

---

Este archivo `README.md` proporciona una descripción general del componente `Favoritos`, incluyendo su propósito, importaciones, props, estado, funciones, estructura y estilos. Puedes copiar y pegar este contenido para documentar el componente en tu proyecto.
