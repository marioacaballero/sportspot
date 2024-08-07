# `InicioBUSCADOR.tsx`

## Descripción

El componente `InicioBUSCADOR.tsx` es una interfaz de búsqueda que permite a los usuarios buscar eventos a través de varios filtros. Integra componentes de selección como mapas, deportes y calendarios, y proporciona una experiencia de búsqueda personalizada.

## Dependencias

- `react`: Biblioteca principal para la construcción de la interfaz de usuario.
- `react-native`: Framework para el desarrollo de aplicaciones móviles nativas.
- `react-redux`: Biblioteca para la integración de Redux con React.
- `@react-navigation/native`: Biblioteca para la navegación en React Native.
- `react-native-google-places-autocomplete`: Componente para la búsqueda de lugares en Google.
- `react-i18next`: Biblioteca para la internacionalización y localización.
- `@expo/vector-icons`: Biblioteca de iconos para React Native.

## Estado

- `frameContainer6Visible`: Controla la visibilidad del modal relacionado con la selección de ubicación.
- `frameContainer8Visible`: Controla la visibilidad del modal relacionado con la selección de deporte.
- `frameContainer10Visible`: Controla la visibilidad del modal relacionado con la selección de fecha.
- `selected`: Almacena la fecha seleccionada.
- `search`: Guarda el texto ingresado en el campo de búsqueda.
- `selectedInput`: Indica si el campo de búsqueda está activo.
- `searching`: Controla si se está realizando una búsqueda.
- `sport`: Almacena los deportes seleccionados.
- `localSport`: Guarda el deporte local seleccionado.
- `eventsFilter`: Objeto que contiene los filtros aplicados a la búsqueda de eventos.

## Funciones

- `openFrameContainer6`: Abre el modal para seleccionar la ubicación.
- `closeFrameContainer6`: Cierra el modal de selección de ubicación.
- `openFrameContainer8`: Abre el modal para seleccionar el deporte.
- `closeFrameContainer8`: Cierra el modal de selección de deporte.
- `openFrameContainer10`: Abre el modal para seleccionar la fecha.
- `closeFrameContainer10`: Cierra el modal de selección de fecha.

## Hooks

- `useEffect`: Realiza efectos secundarios, como la carga de deportes y la navegación basada en el estado de búsqueda.
- `useCallback`: Optimiza el rendimiento de las funciones de apertura y cierre de modales.

## Notas

- Asegúrate de tener los permisos adecuados para acceder a los servicios de ubicación y mapas.
- Los modales para la selección de ubicación, deporte y fecha se gestionan a través del estado de visibilidad correspondiente.
- La funcionalidad de búsqueda y filtrado depende de la integración con Redux para manejar el estado global de los eventos y los filtros aplicados.
