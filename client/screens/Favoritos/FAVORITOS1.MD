# Favoritos1 Component

El componente `Favoritos1` es una pantalla en una aplicación móvil construida con React Native. Su propósito es mostrar una lista de eventos favoritos del usuario, agrupados por deporte.

## Descripción

`Favoritos1` muestra los eventos que el usuario ha marcado como favoritos. Los eventos se agrupan por el deporte asociado y se presentan en una lista. Dependiendo del estado de carga de los datos, el componente puede mostrar un indicador de carga o la lista de eventos agrupados.

### Funcionalidades

- **Agrupación de Favoritos:** Los eventos favoritos se agrupan por deporte.
- **Navegación:** Permite la navegación a una pantalla detallada con la lista de eventos de un deporte específico.
- **Estado de Carga:** Muestra un indicador de carga cuando los datos están siendo cargados.

### Hooks Utilizados

- `useEffect`: Actualiza el estado de icono seleccionado cuando la pantalla está enfocada.
- `useSelector`: Accede al estado global de Redux para obtener información del usuario, deportes y eventos.
- `useDispatch`: Permite despachar acciones a Redux.
- `useIsFocused`: Determina si la pantalla está actualmente enfocada.

### Props

El componente no recibe props directamente.

### Estado de Redux

- **users:** Información del usuario actual.
- **sports:** Lista de deportes disponibles.
- **events:** Lista de eventos disponibles.
- **loadingGet:** Indicador de carga para la obtención de eventos.

### Navegación

- **Pantalla de Favoritos:** Permite la navegación a la pantalla de `Favoritos` con los eventos agrupados por deporte.

### Estilos

- Utiliza `StyleSheet` para definir estilos relacionados con la disposición y apariencia de la lista de favoritos, el indicador de carga y otros elementos de la interfaz.

## Uso

Este componente se integra dentro de una navegación y se espera que reciba datos del estado global de Redux. Es ideal para mostrar una lista de eventos favoritos de un usuario y permite la navegación a detalles específicos de cada deporte.

