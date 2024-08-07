# Colaboradores Component

## Descripción

El componente `Colaboradores` es una pantalla en la aplicación React Native que permite a los usuarios gestionar y visualizar una lista de colaboradores. Los usuarios pueden subir datos de nuevos colaboradores, visualizar una lista de colaboradores existentes y eliminar eventos. Además, el componente maneja la carga de imágenes para los colaboradores y proporciona una interfaz para confirmar o cancelar las acciones.

## Estructura del Componente

El componente está dividido en varias secciones, cada una con una funcionalidad específica:

1. **Estado del Componente**:
   - `showDeleteModal`: Controla la visibilidad del modal de confirmación de eliminación.
   - `showCollaboratorModal`: Controla la visibilidad del modal para agregar un nuevo colaborador.
   - `selectedPage`: Determina la página actual (feed o upload).
   - `name`: Almacena el nombre del colaborador.
   - `selectedImage`: Almacena la URL de la imagen seleccionada para el colaborador.
   - `isLoading`: Controla el estado de carga de la imagen.
   - `link`: Almacena el enlace del colaborador.

2. **Funciones Principales**:
   - `handleUploadCollaboratorData()`: Envía los datos del colaborador (nombre, enlace, imagen) al servidor y actualiza la lista de colaboradores.
   - `transformHttpToHttps(url)`: Convierte URLs HTTP a HTTPS.
   - `uploadImage()`: Maneja la carga de imágenes para el colaborador usando la API de Cloudinary.
   - `handleDelete(id)`: Muestra un alerta para confirmar la eliminación de un evento y maneja la eliminación.

3. **Efectos**:
   - `useEffect(() => { dispatch(getAllCollaborators()) }, [])`: Carga la lista de colaboradores cuando el componente se monta.

4. **Renderizado**:
   - **Cargando**: Muestra un `ActivityIndicator` mientras se cargan los colaboradores.
   - **Página de Carga**: Permite subir una imagen y agregar datos de un colaborador.
   - **Página de Feed**: Muestra la lista de colaboradores y proporciona un botón para agregar nuevos colaboradores.

## Estilos

- **Contenedor Principal**:
  - Usa un `LinearGradient` para el fondo.
  - El contenido se ajusta al tamaño de la pantalla y se alinea con un padding superior.

- **Estilo de los Elementos**:
  - **Texto**: Se usa `FontSize`, `FontFamily`, y `Color` del archivo `GlobalStyles`.
  - **Botones y Contenedores**: Están diseñados con bordes redondeados y sombras para resaltar sobre el fondo.

## Dependencias

- **React Native**: Utiliza componentes básicos como `View`, `Text`, `ScrollView`, `TextInput`, `Pressable`, `Image`, `ToastAndroid`, `TouchableOpacity`, `Dimensions`, y `Alert`.
- **Expo Image Picker**: Para seleccionar imágenes de la galería.
- **Redux**: Para manejar el estado global y las acciones relacionadas con los colaboradores y eventos.
- **i18next**: Para la internacionalización del texto.
- **react-native-paper**: Para el `ActivityIndicator`.

## Props

Este componente no recibe props directamente, ya que maneja su propio estado interno y utiliza hooks para la navegación y la gestión del estado global.

## Uso

Este componente se usa dentro de una navegación en la aplicación, típicamente como una pantalla en una pila de navegación. Asegúrate de tener configurado Redux y los proveedores necesarios para el estado y la internacionalización.

## Notas Adicionales

- Asegúrate de tener configurado `Cloudinary` con las credenciales adecuadas para el manejo de imágenes.
- Los modales para confirmar la eliminación y agregar un nuevo colaborador se controlan a través del estado del componente y se renderizan condicionalmente.

