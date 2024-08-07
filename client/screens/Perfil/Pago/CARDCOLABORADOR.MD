# `CardColaborador` Component

## Descripción

El componente `CardColaborador` es una tarjeta que muestra información sobre un colaborador. Incluye una imagen, el nombre del colaborador, una URL asociada, y un botón para eliminar al colaborador. Utiliza Redux para manejar las acciones relacionadas con la eliminación de colaboradores y muestra mensajes de confirmación y éxito.

## Importaciones

- **react-native**:
  - `View`, `Text`, `Image`, `Dimensions`, `Pressable`, `Alert`, `ToastAndroid`, `TouchableOpacity`: Componentes y utilidades para construir la interfaz y manejar eventos.
- **React**: Biblioteca principal para crear componentes de interfaz de usuario.
- **../../../GlobalStyles**: Contiene estilos globales como colores, fuentes y bordes.
- **../../../redux/actions/collaborators**: Acciones para eliminar y obtener colaboradores desde Redux.
- **react-redux**: Hook `useDispatch` para despachar acciones de Redux.
- **i18next**: Función `t` para la traducción de textos.

## Props

- **`name`**: Nombre del colaborador.
- **`url`**: URL asociada al colaborador.
- **`image`**: URL de la imagen del colaborador.
- **`id`**: ID del colaborador, utilizado para la eliminación.
- **`setShowDeleteModal`**: Función que se llama para mostrar el modal de confirmación de eliminación.

## Funciones

- **`handleDelete`**: Maneja la eliminación del colaborador. Muestra un `Alert` de confirmación y, si el usuario confirma, despacha las acciones `deleteCollaborator` y `getAllCollaborators`. Muestra un `ToastAndroid` con un mensaje de éxito.

## Estructura

- **`View` Principal**: Contenedor principal con estilo que incluye:
  - **`Image`**: Muestra la imagen del colaborador.
  - **`View` Interno**: Contiene el nombre y la URL del colaborador.
  - **`TouchableOpacity`**: Botón para eliminar el colaborador, que muestra un icono de eliminación.

## Estilos

- Los estilos se definen en línea dentro del componente para los siguientes elementos:
  - **Contenedor principal**: Configura el tamaño, la sombra, el color de fondo y el radio del borde.
  - **Imagen**: Configura el tamaño y la visualización de la imagen.
  - **Texto**: Estilos para el nombre y la URL del colaborador.
  - **Botón de eliminación**: Estilo para el botón circular con el icono de eliminación.

## Notas

- El componente usa `Alert` para confirmar la eliminación y `ToastAndroid` para mostrar un mensaje de éxito.
- La función `setShowDeleteModal` es llamada al presionar el botón de eliminación para gestionar la visualización del modal de confirmación.

---


