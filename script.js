// weeklyParshah <- GET(
//     url = "https://www.sefaria.org/api/calendars"
// )

// content(weeklyParshah, type = "text")

// async function getParshah(){
//     const calendarUrl = 'https://www.sefaria.org/api/calendars/'
    
    // const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    // const proxyUrl = 'https://shrouded-inlet-14671.herokuapp.com/'

//     try {

//     const response = await fetch(calendarUrl)
//     const data = await response.json()
//         console.log(data)
  

//     } catch (error) {
//         getParshah()
//         console.log('Omg what???', error)
//     }
// }

import fetch from 'node-fetch'

async function getParshah(){
    const calendarUrl = 'https://www.sefaria.org/api/calendars/'
    
    try {
    const response = await fetch(calendarUrl);
    const data = await response.json();
        console.log(data['calendar_items']['0'])
        // console.log(data['calendar_items']['displayValue']);
        // console.log(data['calendar_items']['displayValue']['he']);
        // console.log(data['calendar_items']['url']);
        // console.log(data['calendar_items']['title']['en']);
        // console.log(data['calendar_items']['title']['he']);
    if(!data) {
        return;
    }
    }
    
    catch (error) {
        // getParshah()
        console.log('omg an error', error)
    }
}

    getParshah();