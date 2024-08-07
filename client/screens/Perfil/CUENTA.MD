# `Cuenta.tsx`

## Descripción

El componente `Cuenta.tsx` es una pantalla de perfil de usuario que permite gestionar varias opciones relacionadas con la cuenta. La pantalla incluye enlaces para editar el perfil, gestionar la seguridad y actualizar los datos de pago. Utiliza un gradiente de fondo y proporciona una interfaz de usuario con botones que navegan a diferentes pantallas de la aplicación.

## Funcionalidad

- **Gradient Background**: Utiliza el componente `LinearGradient` para aplicar un fondo con un gradiente de blanco a gris claro.
- **Navigation**: Permite la navegación entre diferentes pantallas usando `useNavigation` de `@react-navigation/native`.
- **Internationalization**: Soporta múltiples idiomas mediante el hook `useTranslation` de `react-i18next`.

## Componentes y Funcionalidades

- **Título de Pantalla**
  - **Texto**: "Gestiona tu cuenta"
  - **Estilo**: Aplicado a través de `styles.gestionaTuCuentaContainer` y `styles.editarPerfilTypo`.

- **Opciones de Configuración**
  - **Editar Perfil**
    - **Icono**: `vector3.png`
    - **Texto**: "Editar perfil"
    - **Subtexto**: "Actualiza tus datos"
    - **Navegación**: Redirige a la pantalla 'EditarPerfil'.
  - **Seguridad**
    - **Icono**: `shieldcheck.png`
    - **Texto**: "Seguridad"
    - **Subtexto**: "Mantente segura"
    - **Navegación**: Redirige a la pantalla 'Seguridad'.
  - **Datos de Pago**
    - **Icono**: `wallet.png`
    - **Texto**: "Datos de pago"
    - **Subtexto**: "Elimina método de pago"
    - **Navegación**: Redirige a la pantalla 'DatosDePago'.

## Estilos

- **Estilo General**
  - El componente utiliza un gradiente de fondo de blanco a gris claro.
  - Los estilos se definen en `StyleSheet.create` y se aplican a los elementos de la interfaz.

- **Estilos de Texto**
  - `gestionaTuCuentaContainer`: Tamaño de fuente grande, color violeta, fuente en negrita.
  - `editarPerfil`: Tamaño de fuente mediano, alineación central.
  - `goingTypo`: Tamaño de fuente extra pequeño, color violeta.

- **Estilos de Contenedores**
  - `pencillineParent`: Contenedor de cada opción de configuración, incluye un borde, sombra y un fondo blanco.
  - `baseText`: Contenedor de texto e íconos, centrado y alineado horizontalmente.
  - `frameGroup`: Contenedor para el texto principal y el subtexto.

- **Estilos de Iconos**
  - `vectorIcon`: Tamaño 25x25 píxeles.
  - `shieldcheckIcon`: Tamaño 32x32 píxeles.

## Dependencias

- **React Native**: Se utiliza para la creación de la interfaz de usuario.
- **React Navigation**: Para la navegación entre pantallas.
- **Expo Linear Gradient**: Para el fondo con gradiente.
- **React i18next**: Para la internacionalización.

## Archivos Relacionados

- `BackArrowSVG` y `RightArrowGrueso`: Componentes SVG para íconos.
- Imágenes: `vector3.png`, `shieldcheck.png`, `wallet.png`.

## Notas

- Los componentes SVG y las imágenes deben estar en la carpeta `../../assets/`.
- Asegúrate de que `react-i18next` esté correctamente configurado para la traducción de textos.

