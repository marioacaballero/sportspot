# StripeComponent

`StripeComponent` es un componente de React Native que se encarga de manejar el proceso de pago utilizando la API de Paycomet. Este componente utiliza `react-native-webview` para mostrar la interfaz de pago de Paycomet y `axios` para hacer solicitudes HTTP a la API de Paycomet.

## Dependencias

Este componente requiere las siguientes dependencias:

- `react-native-webview`: Para renderizar la interfaz de pago en una vista web.
- `axios`: Para realizar solicitudes HTTP a la API de Paycomet.

## Props

### `route`

- **type**: `object`
- **description**: El objeto `route` proviene de la navegación y debe contener los siguientes parámetros:
  - `amount` (string): El monto a pagar.
  - `cent` (string, opcional): Los centavos adicionales para el monto.

## Funcionalidades

1. **Solicitud a la API de Paycomet**:
   - Se realiza una solicitud POST a la URL `https://rest.paycomet.com/v1/form` con los detalles del pago.
   - Los detalles incluyen el tipo de operación, terminal, descripción del producto, monto, moneda, orden y un token de API.

2. **Obtención de la URL de pago**:
   - Si la respuesta de la API contiene una URL de desafío (`challengeUrl`), se establece esta URL en el estado del componente para cargarla en la vista web.

3. **Renderizado**:
   - Si `url` está disponible, se renderiza un componente `WebView` con la URL obtenida.
   - Si `url` no está disponible, se muestra un `ActivityIndicator` mientras se espera la respuesta de la API.

## Estado

- **url** (`string`): Contiene la URL de pago obtenida de la API.

## Uso

```jsx
import StripeComponent from './StripeComponent';

// En algún lugar de tu aplicación donde uses este componente
<StripeComponent route={{ params: { amount: '10', cent: '00' } }} />
