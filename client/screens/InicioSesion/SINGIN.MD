# SignIn Component

El componente `SignIn` es una pantalla de inicio de sesión en una aplicación React Native que ofrece opciones para autenticación a través de Google, Apple y correo electrónico. También permite el inicio de sesión como invitado y el cambio de idioma de la aplicación.

## Funcionalidad

- **Autenticación con Google**:
  - Usa `expo-auth-session` para la autenticación con Google.
  - Configura credenciales específicas para iOS y Android.
  - Utiliza `GoogleAuthProvider` y `signInWithCredential` de Firebase para manejar el inicio de sesión.

- **Autenticación con Apple**:
  - Implementa la autenticación con Apple utilizando `expo-apple-authentication`.
  - Usa `AppleAuthentication.signInAsync` para manejar el proceso de inicio de sesión.

- **Gestión de Estado del Usuario**:
  - Verifica las credenciales almacenadas en `AsyncStorage` al iniciar el componente.
  - Maneja el estado de autenticación utilizando `onAuthStateChanged` de Firebase.

- **Navegación y Almacenamiento**:
  - Navega a diferentes pantallas según el estado del usuario (inicio de sesión, perfil, etc.).
  - Almacena el token de usuario y las credenciales en `AsyncStorage`.

## Uso

1. **Dependencias**:
   - `expo-auth-session`
   - `expo-web-browser`
   - `firebase`
   - `react-redux`
   - `@react-native-async-storage/async-storage`
   - `expo-apple-authentication`
   - `axios`

2. **Configuración**:
   - Configura las credenciales de Google para iOS y Android en `Google.useIdTokenAuthRequest`.
   - Configura `AppleAuthentication.signInAsync` para la autenticación con Apple.

3. **Funciones Clave**:
   - `checkStoredCredentials()`: Verifica y maneja las credenciales almacenadas.
   - `useFocusEffect()`: Controla el comportamiento del botón de retroceso.
   - `useEffect()`: Maneja la lógica de autenticación y navegación al iniciar el componente.

## Estilos

- **Container**: Contiene el diseño principal de la pantalla.
- **Button**: Define el estilo de los botones de autenticación y navegación.
- **Image**: Estilo para las imágenes de fondo y logotipos.

## Ejemplo de Uso

```jsx
import SignIn from './path/to/SignIn';

// Dentro de tu componente de navegación o principal
<SignIn navigation={navigation} />
