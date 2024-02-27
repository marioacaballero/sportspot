import { createEvent, getAllEvents } from '../../redux/actions/events'

export const onSubmit = async (
  event,
  sport,
  user,
  selectedImage,
  dispatch,
  dateSuscription,
  dateStart
) => {
  const data = {
    title: event.title,
    description: event?.description,
    sportId: sport && sport?.id,
    price: event?.price,
    modality: sport.type,
    location: event?.location,
    dateStart,
    dateInscription: dateSuscription,
    creator: user?.id,
    timeStart: event?.timeStart,
    image: selectedImage
  }

  await dispatch(createEvent(data))
  dispatch(getAllEvents())
  alert('Evento creado')
}
