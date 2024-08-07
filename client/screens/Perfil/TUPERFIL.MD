# README: `TuPerfil.js`

## Descripción del Componente

El componente `TuPerfil` en React Native gestiona la visualización y edición del perfil de usuario en la aplicación. Incluye funcionalidades para cambiar el idioma, gestionar preferencias del usuario, y navegar entre diferentes pantallas.

## Dependencias

- **React** - Biblioteca principal para construir la interfaz de usuario.
- **React Native** - Proporciona componentes nativos para React.
- **React Navigation** - Maneja la navegación entre pantallas.
- **Redux** - Maneja el estado global de la aplicación.
- **AsyncStorage** - Almacena datos localmente en el dispositivo.
- **moment** - Manipulación de fechas y horas.
- **expo-linear-gradient** - Crea degradados de colores.

## Funcionalidades

- **Visualización del Perfil**: Muestra la información del usuario, incluyendo nombre, apellidos, género y edad.
- **Cambio de Rol**: Permite al usuario cambiar entre roles de "organizador" y "deportista".
- **Gestión de Idioma**: Cambia el idioma de la aplicación entre español e inglés.
- **Navegación**: Permite navegar a diferentes pantallas como "Cuenta", "Colaboradores", "Premios", "Entidades", "Contacto" y "Método de Trabajo".
- **Modales**: Muestra modales para la edición de datos y la gestión de preferencias del usuario.

## Hooks Utilizados

- **useEffect**: Para ejecutar efectos secundarios en la inicialización y en el cambio de enfoque.
- **useFocusEffect**: Maneja el evento de presionar el botón de retroceso en la pantalla.
- **useState**: Administra el estado local del componente.
- **useIsFocused**: Determina si el componente está enfocado para actualizar el icono seleccionado en la navegación.

## Funciones Principales

- **getModalState**: Activa el estado del modal para mostrar preferencias del usuario.
- **getUserPreferencesState**: Recupera el estado de las preferencias del usuario desde `AsyncStorage`.
- **onChangeRol**: Cambia el rol del usuario entre "organizador" y "deportista".
- **getUser**: Obtiene los datos del usuario desde la base de datos.

## Estilos

Los estilos del componente están definidos en el objeto `styles` utilizando `StyleSheet.create`. Incluye estilos para la disposición y apariencia de los elementos del perfil, botones y modales.

## Notas

- Asegúrate de tener instaladas todas las dependencias necesarias para el correcto funcionamiento del componente.
- Este componente utiliza iconos y imágenes locales que deben estar disponibles en el proyecto.

---

