# `PruebasEncontradas.js`

## Descripción

Este componente de React Native, `PruebasEncontradas`, se encarga de mostrar una lista de eventos filtrados y ordenados. Los eventos pueden ser filtrados por ubicación, deporte, fecha y precio. Además, permite a los usuarios marcar eventos como favoritos y proporciona opciones para ordenar y filtrar la lista de eventos.

## Componentes Importados

- **React**: Librería principal para la creación de componentes.
- **useState, useEffect**: Hooks de React para manejar el estado y los efectos secundarios.
- **useSelector, useDispatch**: Hooks de React-Redux para acceder al estado global y despachar acciones.
- **Text, StyleSheet, View, Pressable, Image, ScrollView, Modal, TouchableWithoutFeedback, ActivityIndicator, Dimensions**: Componentes de React Native para la interfaz de usuario.
- **useNavigation**: Hook de `@react-navigation/native` para la navegación.
- **GlobalStyles**: Archivo de estilos globales con constantes para colores, fuentes, bordes y rellenos.
- **PopupOrdenarPor**: Componente para mostrar el modal de ordenación.
- **PruebasEncontradasFiltros**: Componente para mostrar el modal de filtros.
- **CorazonSVG**: Componente SVG para mostrar el ícono de corazón.
- **getEventByIdRedux, setFilteredEvents, setShowGuestModal**: Acciones de Redux para obtener eventos, establecer eventos filtrados y mostrar un modal para usuarios invitados.
- **favorite, getUser**: Acciones de Redux para gestionar favoritos y obtener datos del usuario.
- **t**: Función de `i18next` para la traducción de textos.

## Props

- **route**: Objeto que contiene parámetros de navegación, incluidos filtros y términos de búsqueda.

## Estado

- **start**: Valor inicial para el rango de precios.
- **end**: Valor final para el rango de precios.
- **modalOrder**: Estado para controlar la visibilidad del modal de ordenación.
- **modalFilter**: Estado para controlar la visibilidad del modal de filtros.
- **favoriteEvents**: Estado que almacena los eventos favoritos.
- **isGuest**: Booleano que indica si el usuario es un invitado.

## Efectos

1. **Filtrado de Eventos**: Utiliza los parámetros de la ruta y el estado de los eventos para filtrar la lista de eventos según la ubicación, el deporte, la fecha y el precio.
2. **Actualización de Favoritos**: Actualiza la lista de eventos favoritos cuando cambia el estado global de favoritos.
3. **Actualización del Estado de Favoritos**: Actualiza la lista de eventos favoritos cuando cambia el estado global de favoritos.

## Funciones

- **toggleFavorite(eventId)**: Alterna el estado de favorito para un evento específico.
- **toggleModalOrder()**: Muestra el modal de ordenación.
- **toggleModalFilter()**: Muestra el modal de filtros.

## Renderizado

1. **Encabezado**: Muestra el título de la pantalla y un botón para volver a la pantalla anterior.
2. **Filtros y Ordenación**: Proporciona botones para abrir los modales de filtros y ordenación.
3. **Lista de Eventos**: Muestra una lista de eventos filtrados. Cada evento puede ser presionado para navegar a los detalles del evento. También se muestra un ícono para marcar el evento como favorito.

## Estilos

El archivo utiliza `StyleSheet` de React Native para definir los estilos de los diferentes componentes y vistas. Los estilos están organizados en categorías como `pruebasEncontradas`, `frameContainer`, `unsplashon4qwhhjcemParentShadowBox`, entre otros, para gestionar la presentación visual del componente.

## Dependencias

- **react**
- **react-native**
- **react-redux**
- **@react-navigation/native**
- **redux**
- **i18next**

## Notas

- Asegúrate de tener las imágenes y los íconos referenciados en las rutas correctas.
- Este componente está diseñado para integrarse con el estado global de Redux y puede requerir configuraciones adicionales de Redux para funcionar correctamente.
