import { createEvent, getAllEvents } from '../../redux/actions/events'

export const onSubmit = async (
  event,
  sport,
  user,
  selectedImage,
  dispatch,
  dateSuscription,
  dateStart,
  setShowAlert
) => {
  const data = {
    title: event.title,
    description: 'Evento',
    sportId: sport && sport?.id,
    price: event?.price.slice(0, -1),
    modality: sport.type,
    location: event?.location,
    dateStart,
    dateInscription: dateSuscription,
    creator: user?.id,
    timeStart: '00:00',
    image: selectedImage
  }

  await dispatch(createEvent(data))
  setShowAlert(true)
  dispatch(getAllEvents())
}
