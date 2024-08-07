# IniciarSesin Component

El componente `IniciarSesin` es una pantalla de inicio de sesión en una aplicación móvil desarrollada con React Native. Permite a los usuarios iniciar sesión con su correo electrónico y contraseña.

## Descripción

`IniciarSesin` ofrece una interfaz para que los usuarios ingresen su correo electrónico y contraseña. Realiza la validación del correo electrónico, maneja el inicio de sesión y la navegación a otras pantallas según el estado del usuario.

### Funcionalidades

- **Inicio de Sesión:** Permite a los usuarios iniciar sesión con su correo electrónico y contraseña.
- **Validación de Email:** Verifica el formato del correo electrónico ingresado.
- **Manejo de Errores:** Muestra mensajes de error si el correo electrónico o la contraseña son inválidos.
- **Navegación Condicional:** Navega a diferentes pantallas basadas en el estado del usuario y el token de sesión.

### Hooks Utilizados

- `useEffect`: Maneja la navegación condicional y el almacenamiento del token.
- `useState`: Maneja el estado del formulario de inicio de sesión y los mensajes de error.
- `useRef`: Referencia al campo de entrada de contraseña para el enfoque.
- `useDispatch`: Permite despachar acciones para el inicio de sesión y manejo de errores.
- `useSelector`: Accede al estado global de Redux para obtener información del usuario y estado de carga.
- `useFocusEffect`: Se utiliza para manejar efectos cuando el componente está enfocado.

### Props

- **navigation:** Objeto de navegación proporcionado por `react-navigation` para cambiar de pantalla.

### Estado de Redux

- **users:** Información del usuario, token de sesión, estado de carga y errores.

### Manejo de Errores

- **emailError:** Mensaje de error para el campo de correo electrónico si no cumple con el formato requerido.
- **error:** Mensaje de error general para problemas con el inicio de sesión.

### Navegación

- **InicioDeportista:** Navega a esta pantalla si el usuario está autenticado y tiene un nombre.
- **EditarPerfil:** Navega a esta pantalla si el usuario está autenticado pero no tiene un nombre.
- **RecuperarContraseña:** Permite al usuario recuperar su contraseña.
- **Registrarse:** Navega a la pantalla de registro para nuevos usuarios.

### Estilos

- Utiliza `StyleSheet` para definir los estilos relacionados con la disposición y apariencia del formulario de inicio de sesión, mensajes de error, y otros elementos de la interfaz.

## Uso

Este componente se integra en el flujo de inicio de sesión de la aplicación. Debe ser utilizado dentro de una estructura de navegación y se espera que interactúe con el estado global de Redux para manejar el inicio de sesión y los errores.

