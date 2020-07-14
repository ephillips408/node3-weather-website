console.log("Client side JavaScript is loaded.")

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    // e is short for event
    e.preventDefault() // Stops the page from refreshing after search button is clicked.
    const location = searchElement.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) { messageOne.textContent = data.error }
        else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }  
    })
})
})