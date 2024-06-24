useEffect(() => {
  const appliedFilters = route?.params?.filter
  console?.log('appliedFilters', appliedFilters)
  let filteredEvents
  if (appliedFilters?.sportName?.length > 0) {
    const filteredSports = sports
      ?.filter((deporte) => appliedFilters?.sportName?.includes(deporte?.name))
      ?.map((deporte) => deporte?.id)
    console?.log('filteredSports', filteredSports)
    filteredEvents = events?.filter((event) =>
      filteredSports?.includes(event?.sportId)
    )
  }
  if (appliedFilters?.location?.length > 0) {
    const location = appliedFilters?.location
    const filteredEventsCopy = [...filteredEvents]
    filteredEvents = filteredEventsCopy?.filter((event) =>
      event?.location?.toLowerCase()?.includes(location?.toLowerCase())
    )
  }
  if (appliedFilters?.dateStart?.length > 0) {
    const startDate = new Date(appliedFilters?.dateStart[0])
    const endDate = new Date(appliedFilters?.dateStart[1])
    const filteredEventsCopy = [...filteredEvents]
    filteredEvents = filteredEventsCopy?.filter((ev) => {
      const evStart = new Date(ev?.dateStart)
      if (evStart >= startDate && evStart <= endDate) {
        return true
      } else {
        return false
      }
    })
  }
  dispatch(setFilteredEvents(filteredEvents))
}, [])
