# PublicarEvento

El componente `PublicarEvento` es una pantalla que permite a los usuarios crear o editar eventos. Utiliza una combinación de `LinearGradient`, `ScrollView`, y varios componentes de React Native para proporcionar una experiencia de usuario intuitiva y visualmente atractiva.

## Importaciones

- `React`, `useEffect`, `useState` de `react`
- `View`, `StyleSheet`, `Text`, `Pressable`, `ScrollView` de `react-native`
- `useNavigation`, `useRoute` de `@react-navigation/native`
- `Color`, `FontFamily`, `FontSize` de `../../GlobalStyles`
- `BackArrowSVG` de `../../components/SVG/BackArrowSVG`
- `FormularioEventos` de `../../components/FomularioEventos`
- `LinearGradient` de `expo-linear-gradient`
- `useTranslation` de `react-i18next`

## Componentes

### `PublicarEvento`

- **Descripción:** Componente principal que se encarga de la visualización y edición de eventos. Muestra un título, un botón para regresar, y un formulario para crear o editar eventos.
- **Estado:**
  - `eventData` (estado que almacena los datos del evento actual)
  - `onEditMode` (booleano que indica si el componente está en modo edición)
- **Hooks:**
  - `useEffect`: Configura el estado inicial del evento si el componente está en modo edición, basado en los parámetros recibidos.
- **Renderiza:**
  - Un fondo de gradiente utilizando `LinearGradient`.
  - Un `ScrollView` que contiene:
    - Un contenedor con el título de la pantalla y un botón para regresar.
    - Un componente `FormularioEventos` configurado con el estado de edición y los datos del evento.

## Estilos

- **container:** Contenedor principal que alinea los elementos y aplica padding.
- **titleContainer:** Contenedor para el título y el botón de regresar, organizado en fila y alineado.
- **title:** Estilo del texto del título, con un tamaño de fuente grande y color violeta.
- **innerContainer:** Contenedor del formulario con padding, fondo blanco, y bordes redondeados.

## Uso

Este componente se utiliza en la navegación para gestionar la creación o edición de eventos. El modo de edición se activa si se pasan parámetros que indiquen que se está editando un evento existente.

