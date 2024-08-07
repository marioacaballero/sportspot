# CardReview Component

Este componente es un elemento de interfaz de usuario diseñado para mostrar una revisión con un título, una descripción y una calificación en estrellas.

## Descripción

`CardReview` es un componente funcional que muestra un bloque de revisión. Incluye un título, una calificación en estrellas y una descripción. La calificación se muestra mediante estrellas llenas y vacías.

## Propiedades

- `title` (string): El título de la revisión. Se muestra en negrita y tiene un tamaño de fuente grande.
- `description` (string): La descripción de la revisión, que se muestra debajo del título.
- `qualification` (number): La calificación de la revisión en formato de estrellas. Debe ser un número entero.

## Funciones

### `createRating`

Esta función genera una representación visual de la calificación en estrellas:

- `rating` (number): Número de estrellas llenas.
- `total` (number): Número total de estrellas (por defecto es 5).
- `starIcon` (string): Símbolo para las estrellas llenas (por defecto es '⭐').
- `emptyIcon` (string): Símbolo para las estrellas vacías (por defecto es '☆').

La función devuelve una vista que muestra las estrellas llenas y vacías según la calificación proporcionada.

## Estilos

- `cajitaFeliz`: Estilo principal del componente. Define el borde, color de fondo, padding, margen y radio del borde.
- `cajitaFeliz2`: Estilo para la sección que contiene el título y la calificación, alineados en fila y con espacio entre ellos.
- `text`: Estilo para el título, con color, tamaño de fuente, peso de fuente y espaciado de letras.
- `text1`: Estilo para la descripción, con color, tamaño de fuente y familia de fuente.

## Uso

```jsx
<CardReview
  title="Excelente Producto"
  description="Me ha encantado la calidad y el servicio."
  qualification={4}
/>
