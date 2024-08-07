# InicioSUSCRIPCIONES Component

## Descripción

El componente `InicioSUSCRIPCIONES` es una pantalla que permite a los usuarios seleccionar y suscribirse a diferentes planes de suscripción. Utiliza `redux` para manejar el estado global relacionado con las suscripciones y `react-navigation` para la navegación entre pantallas. La interfaz incluye varias opciones de suscripción y muestra las ventajas asociadas a cada plan.

## Dependencias

- `react-native`: Biblioteca principal para construir la interfaz de usuario.
- `react-redux`: Para el manejo del estado global.
- `@react-navigation/native`: Para la navegación entre pantallas.
- `expo-linear-gradient`: Para aplicar gradientes de color.
- `react-i18next`: Para la traducción de textos en diferentes idiomas.

## Funcionalidad

1. **Manejo del Estado**: Utiliza `useState` y `useEffect` para gestionar el estado de la suscripción y el `clientSecret`.
2. **Selección de Planes**: Permite al usuario seleccionar entre varios planes de suscripción y redirige a la pantalla de pago correspondiente.
3. **Visualización de Ventajas**: Muestra una lista de ventajas asociadas a cada plan de suscripción.
4. **Navegación**: Usa `react-navigation` para permitir la navegación a otras pantallas como la de detalles de suscripción y la pantalla de pago de Stripe.

## Uso

```javascript
import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from "react-i18next";
import { createSubscription, getSubscription } from '../../redux/actions/stripe';
import SubscribeView from '../../components/SuscribeView';
import { prices } from '../../utils/prices.stripe';
import { Color, FontFamily, FontSize, Border, Padding } from '../../GlobalStyles';

const InicioSUSCRIPCIONES = () => {
  // Código del componente
};

const styles = StyleSheet.create({
  // Estilos del componente
});

export default InicioSUSCRIPCIONES;
