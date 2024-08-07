# `EditarPerfil.js`

Este archivo contiene un componente de React Native llamado `EditarPerfil`, que permite a los usuarios editar su perfil. A continuación, se describe su funcionalidad y estructura.

## Importaciones

- **React y Hooks**: `useState`, `useCallback`, `useEffect`, `useRef`
- **Componentes de React Native**: `Text`, `StyleSheet`, `View`, `Pressable`, `Modal`, `Image`, `ScrollView`, `TextInput`, `TouchableOpacity`
- **ImagePicker**: Para seleccionar imágenes de la galería.
- **Picker**: Componente para seleccionar valores de una lista desplegable.
- **Navigation**: `useNavigation` de `@react-navigation/native` para navegación.
- **Redux**: `useDispatch`, `useSelector` para manejar el estado global.
- **Actions y Reducers**: `getUser`, `updateUser`, `updateUserAvatar` de `../../redux/actions/users`, `setDateStart` de `../../redux/slices/events.slices`
- **Components**: `BackArrowSVG`, `CalendarOneDay`, `DatosDeportista`, `Maps`
- **AsyncStorage**: Para almacenar datos localmente.
- **i18n**: `useTranslation` para la localización.

## Estado del Componente

- `frameContainer6Visible`: Controla la visibilidad del modal de mapas.
- `renamedEmail`: Almacena el correo electrónico renombrado.
- `topContainerVisible`: Controla la visibilidad del modal del calendario.
- `preferencesModalVisible`: Controla la visibilidad del modal de preferencias.
- `selectedImage`: Almacena la imagen seleccionada para el perfil.
- `valuesUser`: Contiene los valores del usuario que se pueden editar.

## Efectos Secundarios

- **ScrollView**: Se ajusta la posición al iniciar el componente.
- **Get User Preferences**: Se verifica y muestra el modal de preferencias si es necesario.

## Funciones

### `settingValuesUser`
Actualiza los valores del usuario en el estado local.

### `openTopContainer` y `closeTopContainer`
Manejan la visibilidad del modal del calendario.

### `onSubmit`
Envía los datos actualizados del usuario a la API y navega de vuelta a la vista del perfil.

### `getUserPreferencesState`
Obtiene el estado de las preferencias del usuario desde `AsyncStorage` y muestra el modal si es necesario.

### `uploadImage`
Permite al usuario seleccionar una imagen de la galería y actualiza el avatar del usuario.

## Renderización

- **LinearGradient**: Envuelve el contenido para proporcionar un fondo degradado.
- **ScrollView**: Permite el desplazamiento del contenido.
- **Modales**: Para el calendario y los mapas.
- **Inputs y Botones**: Para la edición de datos del perfil, incluyendo nombre, apellido, género, fecha de nacimiento, dirección y contacto.

## Estilos

Los estilos se definen en el objeto `styles` usando `StyleSheet.create`. Incluyen estilos para la disposición, los inputs, los botones y otros elementos visuales.

---

Para más detalles sobre cada función y componente, consulte el código fuente en el archivo.
