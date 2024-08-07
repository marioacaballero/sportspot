# Bienvenida Component

## Descripción

El componente `Bienvenida` en React Native es una pantalla de bienvenida que se muestra al usuario al iniciar la aplicación. Después de un breve tiempo de carga, redirige automáticamente al usuario a la pantalla de inicio de sesión.

## Funcionalidad

- **Navegación**: Utiliza `useNavigation` para manejar la navegación a la pantalla de inicio de sesión (`SignIn`).
- **Temporizador**: Usa `setTimeout` para simular un tiempo de carga de 3 segundos antes de la navegación.

## Estructura

1. **Contenedor Principal**: Un `View` que contiene una imagen de fondo.
2. **Imagen de Fondo**: Muestra una imagen que cubre toda la pantalla.

## Estilos

Los estilos están definidos en el objeto `styles` utilizando `StyleSheet.create`. Incluye estilos para:

- **background**: Asegura que la imagen de fondo cubra toda la pantalla (`width: '100%'`, `height: '100%'`).

## Props

Este componente no recibe props directamente.

## Métodos

- **useEffect**: Utiliza el hook `useEffect` para ejecutar la lógica de navegación después de que el componente se monta. Configura un temporizador de 3 segundos para redirigir al usuario a la pantalla de inicio de sesión y limpia el temporizador si el componente se desmonta antes de que finalice.

## Uso

```jsx
import Bienvenida from 'path-to-Bienvenida';

// Dentro de un componente funcional
<Bienvenida />
