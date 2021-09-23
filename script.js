const titleEng = document.getElementById('name-en')
const titleHeb = document.getElementById('name-he')

// import fetch from 'node-fetch'

async function getParshah(){
    const calendarUrl = 'https://www.sefaria.org/api/calendars/'
    
    try {
    const response = await fetch(calendarUrl);
    const data = await response.json();
    console.log(data)
        // console.log(data['calendar_items']['0'])
        console.log(data['calendar_items']['0']['title']['en'])
        // console.log(data['calendar_items']['displayValue']);
        // console.log(data['calendar_items']['displayValue']['he']);
        // console.log(data['calendar_items']['url']);
        // console.log(data['calendar_items']['title']['en']);
        // console.log(data['calendar_items']['title']['he']);
        titleEng.innerText =  data['calendar_items']['0']['title']['en']
    
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