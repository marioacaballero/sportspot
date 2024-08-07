# `Contacta.tsx`

## Descripción

El componente `Contacta.tsx` es una pantalla de contacto que permite a los usuarios enviar un mensaje, ingresar su nombre y correo electrónico. Además, proporciona enlaces a documentos importantes como el aviso legal, la política de privacidad y los términos y condiciones. La pantalla incluye un gradiente de fondo y utiliza varias entradas de texto para la recopilación de información del usuario.

## Funcionalidad

- **Gradient Background**: Utiliza el componente `LinearGradient` para aplicar un fondo con un gradiente de blanco a gris claro.
- **Navigation**: Permite la navegación usando `useNavigation` de `@react-navigation/native`.
- **Internationalization**: Soporta múltiples idiomas mediante el hook `useTranslation` de `react-i18next`.

## Componentes y Funcionalidades

- **Título de Pantalla**
  - **Texto**: "Contáctanos"
  - **Estilo**: Aplicado a través de `styles.title`.

- **Formulario de Contacto**
  - **Campo de Mensaje**
    - **Placeholder**: "Contáctanos"
    - **Estilo**: Aplicado a través de `styles.messageContainer` y `styles.textInput`.
  - **Campo de Nombre**
    - **Placeholder**: "Nombre"
    - **Estilo**: Aplicado a través de `styles.textContainer`.
  - **Campo de Email**
    - **Placeholder**: "Email"
    - **Estilo**: Aplicado a través de `styles.textContainer`.
  - **Botón Enviar**
    - **Texto**: "Enviar"
    - **Acción**: Muestra una alerta y navega hacia atrás.
    - **Estilo**: Aplicado a través de `styles.sendContainer` y `styles.send`.

- **Enlaces Legales**
  - **Aviso Legal**
    - **Acción**: Redirige a un documento de Google Drive.
    - **Texto**: "Aviso legal"
  - **Política de Privacidad**
    - **Acción**: Redirige a un documento de Google Drive.
    - **Texto**: "Política de Privacidad"
  - **Términos y Condiciones**
    - **Acción**: Redirige a un documento de Google Drive.
    - **Texto**: "Términos y condiciones"

## Estilos

- **Estilo General**
  - El componente utiliza un gradiente de fondo de blanco a gris claro.
  - Los estilos se definen en `StyleSheet.create` y se aplican a los elementos de la interfaz.

- **Estilos de Contenedores**
  - `container`: Contenedor principal con padding.
  - `innerContainer`: Contenedor para el formulario, incluye sombra y bordes redondeados.
  - `titleContainer`: Contenedor para el título de la pantalla.
  - `messageContainer`: Contenedor para el campo de mensaje, incluye bordes y redondeo.
  - `textContainer`: Contenedor para los campos de nombre y email, incluye bordes y redondeo.

- **Estilos de Texto**
  - `title`: Tamaño de fuente grande, color violeta, fuente en negrita.
  - `send`: Texto del botón enviar, color blanco, fuente en negrita.

- **Estilos de Entradas de Texto**
  - `textInput`: Configuración de padding y alineación para el campo de mensaje.

- **Estilos del Botón**
  - `sendContainer`: Contenedor del botón enviar, con fondo violeta y texto blanco.

## Funciones

- **handlePress**: Muestra una alerta y navega hacia la pantalla anterior.
- **handleRedirect**: Abre enlaces externos a documentos importantes según el parámetro recibido (`legal`, `privacy`, `terms`).

## Dependencias

- **React Native**: Para la creación de la interfaz de usuario.
- **React Navigation**: Para la navegación entre pantallas.
- **Expo Linear Gradient**: Para el fondo con gradiente.
- **React i18next**: Para la internacionalización.
- **Linking**: Para abrir enlaces externos.

## Archivos Relacionados

- `BackArrowSVG`: Componente SVG para el ícono de retroceso.
- Enlaces: Documentos en Google Drive para aviso legal, política de privacidad y términos y condiciones.

## Notas

- Asegúrate de que los enlaces proporcionados en `handleRedirect` sean accesibles y correctos.
- El componente incluye un gradiente de fondo y utiliza varios estilos para crear una interfaz amigable y funcional.
