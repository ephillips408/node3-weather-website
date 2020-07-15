const request = require("request")

const forecast = (lat, lon, callback) => {
    // Using property shorthand for url in request.
    const url = `http://api.weatherstack.com/current?access_key=de803013c449bdeffb36e344794b3df1&query=${lat},${lon}&units=f` // units=f changes to Fahrenheit
    // body is a property of response. Using object destructuring for shorthand notation. Recall that response gets JSON format, aka "JavaScript Object."
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to find location services', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            // console.log(response)
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees. The humidity is ${body.current.humidity}%.`)
        }
    })
}

module.exports = forecast