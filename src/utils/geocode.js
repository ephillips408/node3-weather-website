const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZXBoaWxsaXBzNDA4IiwiYSI6ImNrY2dmM2R5ZjBwbzUyeGsyZjgzNjF5eGYifQ.0JIwfGuq-mu4k7ngmi1fIg&limit=1`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name 
            })
        }
    })
}

// geocode('Portland', (error, data) => {
//     console.log('Error:', error)
//     console.log('Data:', data)
// })

module.exports = geocode