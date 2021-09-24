const titleEng = document.getElementById('name-en')
const titleHeb = document.getElementById('name-he')
const holidayTitleEng = document.getElementById('holiday-title-en')
const holidayTitleHeb = document.getElementById('holiday-title-he')
const refEng = document.getElementById('ref-en')
const refHeb = document.getElementById('ref-he')
const descEng = document.getElementById('desc-en')
const descHeb = document.getElementById('desc-he')

// import fetch from 'node-fetch'

async function getParshah(){
    const calendarUrl = 'https://www.sefaria.org/api/calendars/'
    
    try {
    const response = await fetch(calendarUrl);
    const data = await response.json();
    
    console.log(data)
    console.log(data['calendar_items']['0']['title']['en'])
    console.log(data['calendar_items']['0']['title']['he'])
    console.log(data['calendar_items']['0']['displayValue']['en'])
    console.log(data['calendar_items']['0']['displayValue']['he'])
    console.log(data['calendar_items']['0']['ref'])
    console.log(data['calendar_items']['0']['heRef'])
    console.log(data['calendar_items']['0']['description']['en'])
    console.log(data['calendar_items']['0']['description']['he'])
        
    titleEng.innerText = data['calendar_items']['0']['title']['en'];
    titleHeb.innerText = data['calendar_items']['0']['title']['he']
    holidayTitleEng.innerText = data['calendar_items']['0']['displayValue']['en']
    holidayTitleHeb.innerText = data['calendar_items']['0']['displayValue']['he']
    refEng.innerText = data['calendar_items']['0']['ref']
    refHeb.innerText = data['calendar_items']['0']['heRef']
    descEng.innerText = data['calendar_items']['0']['description']['en']
    descHeb.innerText = data['calendar_items']['0']['description']['he']
    
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