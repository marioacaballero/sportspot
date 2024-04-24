import { createEvent } from '../../redux/actions/events'

export const onSubmit = (
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
    description: 'Descripción del evento',
    sportId: sport && sport?.id,
    price: event?.price.slice(0, -1),
    modality: sport.type,
    location: event?.location,
    phoneNumber: event.phoneNumber,
    places: parseInt(event.places),
    dateStart,
    dateInscription: dateSuscription,
    creator: user?.id,
    timeStart: '00:00',
    image: selectedImage
  }
  dispatch(createEvent(data))
  setShowAlert(true)
}
