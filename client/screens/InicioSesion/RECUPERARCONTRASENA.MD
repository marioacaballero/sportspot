# RecuperarContrasena Component

El componente `RecuperarContrasena` permite a los usuarios recuperar su contraseña mediante un proceso de verificación por correo electrónico. El flujo general incluye el envío de un código de verificación al correo electrónico del usuario, la validación de este código y la creación de una nueva contraseña.

## Funcionalidad

1. **Recuperación de Contraseña**:
   - En el primer estado (`currentStage === 1`), el usuario ingresa su dirección de correo electrónico. Si el correo electrónico está registrado, se envía un código de verificación al mismo y el estado cambia al segundo (`currentStage === 2`).
   - En el segundo estado, el usuario ingresa el código de verificación recibido y las nuevas contraseñas. Si las contraseñas coinciden, se actualiza la contraseña del usuario.

2. **Alertas**:
   - Se utiliza el componente `CustomAlert` para mostrar mensajes de error o confirmación durante el proceso de recuperación.

## Hooks y Estado

- **Hooks**:
  - `useDispatch` y `useSelector` de `react-redux` para la gestión del estado global.
  - `useTranslation` de `react-i18next` para la traducción de textos.
  - `useEffect` para despachar acciones al cargar el componente.

- **Estado Local**:
  - `email`: Correo electrónico ingresado por el usuario.
  - `currentStage`: Estado actual del proceso de recuperación (1 o 2).
  - `verificationCode`: Código de verificación ingresado por el usuario.
  - `password1` y `password2`: Nuevas contraseñas ingresadas por el usuario.
  - `showAlert`: Booleano para controlar la visibilidad de la alerta.
  - `message`: Mensaje a mostrar en la alerta.
  - `stateNavigate`: Booleano para controlar la navegación al iniciar sesión.

## Props

El componente no recibe props directamente, sino que utiliza la navegación proporcionada por `useNavigation` para redirigir al usuario según sea necesario.

## Estilos

- **Estilos Principales**:
  - `iniciarSesin`: Contenedor principal del componente.
  - `background`: Imagen de fondo que cubre toda el área del componente.
  - `frameParent`: Contenedor principal para los elementos del componente.
  - `frameGroup`: Contenedor para el grupo de elementos relacionados con la entrada de datos.
  - `nombreDeUsuarioWrapper` y `contraseaWrapper`: Estilos para los campos de entrada de texto.
  - `enviarWrapper` y `enviar`: Estilos para el botón de envío.

## Componentes Importados

- **CustomAlert**: Componente personalizado para mostrar alertas.
- **TextInput**: Campo de entrada de texto para correo electrónico, códigos y contraseñas.
- **Image**: Para mostrar imágenes estáticas.
- **Pressable**: Para los botones interactivos.

## Acciones Redux

- `getAllUsers`: Obtiene todos los usuarios desde la base de datos.
- `resetPasswordMail`: Envia un correo electrónico con un código de verificación para restablecer la contraseña.
- `validateResetPassword`: Valida el código de verificación y restablece la contraseña.

