# GenderModal Component

El componente `GenderModal` es un modal en React Native que permite a los usuarios seleccionar su género. Este modal presenta dos botones para elegir entre "hombre" y "mujer". Además, proporciona un método para cerrar el modal y actualizar el estado del género seleccionado.

## Props

- **`setGender`** (`function`): Función para actualizar el género seleccionado. Se espera que la función reciba dos parámetros: un string para el tipo de dato (en este caso, `'sexo'`) y el valor del género (`'hombre'` o `'mujer'`).
- **`onClose`** (`function`): Función para cerrar el modal.

## Funcionalidad

- **Selección de Género**:
  - El modal contiene dos botones (`Pressable`), uno para cada opción de género.
  - Al presionar un botón, se cierra el modal y se llama a la función `setGender` con el género correspondiente.

- **Estilos**:
  - **Contenedor (`View`)**:
    - `borderRadius: 10`
    - `width: '80%'`
    - `paddingVertical: 40`
    - `paddingHorizontal: 25`
    - `backgroundColor: '#fff'`
    - `gap: 10`
    - `justifyContent: 'center'`
    - `alignItems: 'center'`
  - **Botones (`Pressable`)**:
    - `width: '90%'`
    - `paddingVertical: 10`
    - `borderRadius: 50`
    - `backgroundColor: Color.sportsNaranja`
    - `justifyContent: 'center'`
    - `alignItems: 'center'`
  - **Texto (`Text`)**:
    - `fontSize: 16`
    - `fontFamily: FontFamily.inputPlaceholder`
    - `fontWeight: '700'`
    - `color: '#fff'`

## Uso

```jsx
import GenderModal from './path/to/GenderModal';

// Dentro de tu componente principal
<GenderModal setGender={handleSetGender} onClose={handleCloseModal} />
