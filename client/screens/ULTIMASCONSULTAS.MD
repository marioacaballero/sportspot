# UltimasConsultas Component

## Descripción

El componente `UltimasConsultas` es una pantalla en la aplicación que muestra eventos visitados recientemente por el usuario. Ofrece la posibilidad de filtrar estos eventos por diferentes períodos de tiempo y de marcar eventos como favoritos. Además, proporciona una interfaz de usuario con soporte para múltiples idiomas y un estilo atractivo utilizando `LinearGradient` y otros componentes de React Native.

## Funcionalidad

- **Filtrado de Eventos:** 
  - Permite filtrar eventos visitados según los períodos: día, semana y mes.
  - Utiliza `Switch` para seleccionar el período deseado.

- **Interacción con Favoritos:**
  - Muestra un ícono de corazón que el usuario puede presionar para marcar o desmarcar un evento como favorito.
  - Actualiza el estado de favoritos en la tienda Redux y sincroniza con la base de datos.

- **Carga Condicional de Contenido:**
  - Muestra un indicador de carga (`ActivityIndicator`) mientras se están recuperando los datos.
  - Una vez que los datos están disponibles, muestra una lista de eventos con información detallada.

- **Navegación y Redirección:**
  - Permite navegar a la pantalla de detalles del evento cuando se selecciona un evento.
  - Utiliza `useNavigation` para manejar la navegación entre pantallas.

- **Internacionalización:**
  - Usa `useTranslation` para soportar múltiples idiomas en la interfaz de usuario.

## Propiedades

Este componente no recibe propiedades directamente, pero utiliza parámetros de navegación a través de `route.params` para obtener datos necesarios.

## Dependencias

- `react`
- `react-redux`
- `react-native`
- `react-navigation`
- `expo-linear-gradient`
- `react-native-vector-icons`
- `react-native-safe-area-context`

## Estilos

- **LinearGradient:** Aplica un gradiente de color de fondo que va de blanco a gris claro.
- **Estilos Dinámicos:** Cambian basados en el estado del `Switch` para reflejar la selección actual.

## Uso

Este componente se utiliza dentro de la aplicación para mostrar eventos recientes visitados por el usuario y permitir la interacción con estos eventos, como marcar favoritos y filtrar por diferentes períodos de tiempo.

## Ejemplo de Uso

```jsx
import UltimasConsultas from './path/to/UltimasConsultas';

// En tu componente de navegación
<Stack.Screen
  name="UltimasConsultas"
  component={UltimasConsultas}
/>
