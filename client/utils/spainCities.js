const axios = require('axios')

async function fetchSpainCities() {
  try {
    const username = 'krakra' // Replace 'your_username' with your GeoNames username
    const response = await axios.get('http://api.geonames.org/searchJSON', {
      params: {
        country: 'ES', // Country code for Spain
        featureClass: 'P', // Feature class for populated places
        username // Your GeoNames username
      }
    })

    console.log('response.data: ', response.data)
    if (!response.data || !Array.isArray(response.data.geonames)) {
      throw new Error('Invalid response format')
    }

    const spainCities = response.data.geonames.map((city) => ({
      label: city.name,
      region: city.adminName1 || 'Unknown', // Default to "Unknown" if region is undefined
      CP: city.postalcode || 'Unknown' // Default to "Unknown" if postal code is undefined
    }))

    console.log(spainCities)
  } catch (error) {
    console.error('Error fetching Spain cities:', error.message)
  }
}

fetchSpainCities()
