# `Inscripcion.js`

Este componente se encarga de gestionar la inscripción de un usuario a un evento. Permite a los usuarios introducir sus datos personales, elegir opciones y enviar la inscripción. A continuación se detallan las partes principales del archivo y sus funcionalidades.

## Importaciones

- `ImagePicker` de `expo-image-picker` para seleccionar imágenes.
- `React` y sus hooks (`useEffect`, `useState`, `useCallback`) para la gestión de estado y efectos secundarios.
- Componentes de `react-native` como `Modal`, `Pressable`, `ScrollView`, `StyleSheet`, `Text`, `TextInput`, `TouchableOpacity`, y `View`.
- `useDispatch` y `useSelector` de `react-redux` para la interacción con el estado global.
- `Color`, `FontFamily`, `FontSize` desde `../../GlobalStyles` para estilos.
- Acciones y funciones de Redux (`getAllSports`, `getUser`, `submitInscription`, `suscriptionEventUser`, `createEvent`, `getAllEvents`, `updateEvent`, `setSport`, `setDateStart`, `setDateSuscription`) desde `../../redux/actions` y `../../redux/slices`.
- `axiosInstance` para realizar solicitudes HTTP.
- `t` de `i18next` para la traducción de textos.
- Componentes personalizados `Maps`, `CalendarOneDay`, y `GenderModal`.

## Componentes Principales

### `Inscripcion`

- **Propiedades**: 
  - `route`: Parámetros de la navegación.
  - `onEditMode`: Indica si está en modo de edición.
  - `eventData`: Datos del evento para edición.

- **Estado Interno**:
  - `frameContainer6Visible`: Controla la visibilidad de un modal.
  - `calendar`: Controla la visibilidad del calendario.
  - `event`: Estado que contiene los datos del evento y del usuario.
  - `checked`: Estado de la casilla de verificación.
  - `showAlert`: Estado para mostrar alertas.
  - `openProvince`: Controla la visibilidad del modal de provincia.
  - `genderModal`: Controla la visibilidad del modal de género.
  - `gender`: Género seleccionado.
  - `loading`: Estado de carga para procesos de pago.

- **Efectos**:
  - Se realiza una acción al montar el componente (`useEffect`).

- **Funciones**:
  - `cl
