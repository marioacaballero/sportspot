# Registrarse Component

## Descripción

Pantalla de registro que permite a los usuarios crear una cuenta proporcionando nombre, correo electrónico, y contraseña. Incluye validación de entrada y configuración de notificaciones push.

## Funcionalidades

- Registro de usuario con validación de email y contraseña.
- Configuración y solicitud de permisos para notificaciones push.
- Manejo de errores y alertas personalizadas.

## Hooks y Variables

- **`useState`**: Maneja el estado local del usuario, errores y token de notificación.
- **`useRef`**: Referencias para campos de entrada.
- **`useEffect`**: Efectos para obtener usuarios y configurar notificaciones.
- **`useTranslation`**: Para la traducción de textos.

## Funciones Clave

- **`handleRegistrationError`**: Muestra un error si la configuración de notificaciones falla.
- **`registerForPushNotificationsAsync`**: Configura notificaciones y obtiene el token.
- **`validateEmail`**: Valida el formato del correo electrónico.
- **`onValuesUser`**: Actualiza el estado del usuario y valida el correo electrónico.
- **`handleShowAlert`**: Muestra una alerta.
- **`handleCloseAlert`**: Cierra la alerta.
- **`onSubmit`**: Valida y envía los datos de registro.

## Estilos

- **`wrapperFlexBox`**: Estilo para contenedores flexibles.
- **`nombreDeUsuario`**: Estilo para campos de entrada.
- **`registrarseWrapper`**: Estilo para el botón de registro.
- **`background`**: Estilo para la imagen de fondo.

## Navegación

- Redirige a la pantalla de inicio de sesión tras un registro exitoso.
