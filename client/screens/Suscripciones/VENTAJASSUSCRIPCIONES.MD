# VentajasSuscripciones Component

## Descripción

El componente `VentajasSuscripciones` en React Native es una pantalla de suscripción que presenta diferentes planes de suscripción y sus ventajas. Los usuarios pueden navegar a una página de pago de Stripe al seleccionar un plan de suscripción.

## Funcionalidad

- **Navegación**: Utiliza `useNavigation` para manejar la navegación entre pantallas.
- **Internacionalización**: Utiliza `useTranslation` para soportar múltiples idiomas.
- **Stripe Integration**: Llama a `handleStripe` con el plan seleccionado para dirigir al usuario a la página de pago correspondiente.

## Estructura

1. **Contenedor Principal**: Un `ScrollView` que permite desplazar el contenido y contiene toda la estructura del componente.
2. **Encabezado**: Muestra el título de la pantalla.
3. **Ventajas de Suscripción**: Un conjunto de vistas que describen las ventajas de suscribirse, con imágenes y texto.
4. **Planes de Suscripción**: Varios botones que permiten al usuario seleccionar un plan y ser dirigido a la página de Stripe correspondiente.

## Estilos

Los estilos están definidos en el objeto `styles` utilizando `StyleSheet.create`. Incluye estilos para:

- El contenedor principal.
- La sección del encabezado.
- Las cajas que contienen las ventajas.
- Los botones para seleccionar los planes de suscripción.

## Props

Este componente no recibe props directamente.

## Métodos

- **handleStripe(plan)**: Función asincrónica que redirige a la pantalla de pago de Stripe según el plan seleccionado. Los planes disponibles son:
  - `month`
  - `triMonth`
  - `sixMonth`
  - `year`

## Uso

```jsx
import VentajasSuscripciones from 'path-to-VentajasSuscripciones';

// Dentro de un componente funcional
<VentajasSuscripciones />
