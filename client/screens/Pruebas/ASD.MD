# useEffect - Filtrado de Eventos

Este fragmento de código muestra cómo se aplican filtros a una lista de eventos utilizando el hook `useEffect`. Los filtros se basan en parámetros pasados a través de `route.params` y se actualiza la lista de eventos filtrados mediante la acción `setFilteredEvents`.

## Descripción

El hook `useEffect` se ejecuta una vez al montar el componente. Se encarga de aplicar filtros a una lista de eventos (`events`) en función de los parámetros recibidos en `route.params`.

## Lógica del Filtrado

1. **Obtención de Filtros:**
   - Se extraen los filtros aplicados desde `route?.params?.filter`.

2. **Filtrado por Deporte:**
   - Si hay nombres de deportes en los filtros (`appliedFilters?.sportName`), se filtran los deportes para obtener sus IDs.
   - Luego, se filtran los eventos para que solo incluyan aquellos cuyo `sportId` esté en los IDs filtrados.

3. **Filtrado por Ubicación:**
   - Si hay una ubicación en los filtros (`appliedFilters?.location`), se filtran los eventos que contienen la ubicación especificada en su propiedad `location`, ignorando mayúsculas y minúsculas
