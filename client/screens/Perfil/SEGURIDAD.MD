# README del Componente `Seguridad`

## Descripción

El componente `Seguridad` permite a los usuarios gestionar la seguridad de su cuenta. Proporciona funcionalidades para cambiar la contraseña y eliminar la cuenta. Además, utiliza alertas personalizadas para confirmar acciones importantes, como la eliminación de la cuenta.

## Funcionalidades

1. **Cambio de Contraseña**:
   - Permite a los usuarios cambiar su contraseña actual por una nueva.
   - Incluye campos para ingresar la contraseña actual, la nueva contraseña, y confirmar la nueva contraseña.
   - Verifica que la nueva contraseña y la confirmación coincidan y tenga al menos 3 caracteres.

2. **Eliminación de Cuenta**:
   - Ofrece la opción de eliminar permanentemente la cuenta del usuario.
   - Muestra una alerta para confirmar la acción antes de proceder con la eliminación.

3. **Alertas Personalizadas**:
   - Utiliza un componente de alerta (`CustomAlert`) para mostrar mensajes importantes, como confirmaciones y errores.

4. **Soporte Multilenguaje**:
   - Utiliza `react-i18next` para manejar la traducción de textos en diferentes idiomas.

## Estructura del Componente

- **Importaciones**:
  - Importa varias dependencias como `React`, `useState`, `useRef`, `useSelector`, `useDispatch`, y otros componentes necesarios.

- **Estados y Referencias**:
  - `mostrarCamposExtras`: Controla la visibilidad de los campos adicionales para cambiar la contraseña.
  - `password`: Almacena los valores de la contraseña actual, nueva y confirmación.
  - `showAlert`, `message`, `type`: Manejan el estado de las alertas.
  - `newPasswordInputRef`, `passwordInputRef`: Referencias a los campos de entrada de contraseña.

- **Funciones**:
  - `valuesLogin`: Actualiza los valores del estado `password` cuando se ingresan datos en los campos de texto.
  - `handleShowAlert`: Muestra una alerta con un mensaje y tipo especificado.
  - `handleCloseAlert`: Cierra la alerta y maneja la acción correspondiente si se confirma la eliminación de la cuenta.
  - `handleChangePassword`: Valida y envía la solicitud para cambiar la contraseña.
  - `handleContraseñaFocus`: Muestra campos adicionales cuando se enfoca el campo de la contraseña actual.
  - `handleDeleteUser`: Muestra una alerta para confirmar la eliminación de la cuenta.

- **Renderizado**:
  - Utiliza `LinearGradient` para aplicar un fondo degradado.
  - Usa `ScrollView` para permitir el desplazamiento si el contenido excede la pantalla.
  - Incluye campos de entrada para la contraseña actual, nueva contraseña y confirmación.
  - Muestra botones para cambiar la contraseña y eliminar la cuenta.
  - Muestra una alerta personalizada (`CustomAlert`) en función del estado `showAlert`.

## Estilos

- **General**:
  - Utiliza `StyleSheet` para definir los estilos del componente.
  - Los estilos incluyen diseño de botones, campos de entrada, textos y otros elementos visuales.

- **Componentes**:
  - `scrollView`, `seguridad`, `viewContainer`: Controlan la disposición y estilo del contenido.
  - `inputLayout`, `inputContent`: Definen la apariencia de los campos de entrada.
  - `cambiarContrasea`, `eliminarCuenta`: Estilos para los botones de cambiar contraseña y eliminar cuenta.

## Uso

1. **Instalación**:
   - Asegúrate de tener instaladas las dependencias necesarias, incluyendo `react-redux`, `expo-linear-gradient`, `react-i18next`, y otros componentes.

2. **Integración**:
   - Importa y utiliza el componente `Seguridad` en la aplicación donde sea necesario, proporcionando el contexto de usuario y las acciones necesarias a través de Redux.
