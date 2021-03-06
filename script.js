const refreshParashah = document.getElementById('refresh-parashah')

const torahButton = document.getElementById("torahB")
const hafButton = document.getElementById("haftarahB")
const dafButton = document.getElementById("dafB")

const torahData = document.getElementById("parashah-data")
const hafData = document.getElementById("haftarah")
const dafData = document.getElementById("daf-yomi")

hafData.classList.add("hidden")
dafData.classList.add("hidden")

function showTorah(){
    torahData.classList.remove("hidden");
    hafData.classList.add("hidden");
    dafData.classList.add("hidden")
}

function showHaftarah(){
    torahData.classList.add("hidden");
    hafData.classList.remove("hidden");
    dafData.classList.add("hidden")
}

function showDaf(){
    torahData.classList.add("hidden");
    hafData.classList.add("hidden");
    dafData.classList.remove("hidden")
}

torahButton.addEventListener('click', showTorah)
hafButton.addEventListener('click', showHaftarah)
dafButton.addEventListener('click', showDaf)

const titleEng = document.getElementById('name-en')
const titleHeb = document.getElementById('name-he')
const refEng = document.getElementById('ref-en')
const refHeb = document.getElementById('ref-he')
const descEng = document.getElementById('desc-en')
const descHeb = document.getElementById('desc-he')

const hafEng = document.getElementById('haf-en')
const hafHeb = document.getElementById('haf-he')

const dafEng = document.getElementById('daf-en')
const dafHeb = document.getElementById('daf-he')

async function getParashah(){
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

    console.log(data['calendar_items']['1']['displayValue']['en'])
    console.log(data['calendar_items']['1']['displayValue']['he'])

    console.log(data['calendar_items']['2']['displayValue']['en'])
    console.log(data['calendar_items']['2']['displayValue']['he'])
        
    titleEng.innerText = data['calendar_items']['0']['displayValue']['en']
    titleHeb.innerText = data['calendar_items']['0']['displayValue']['he']
    refEng.innerText = data['calendar_items']['0']['ref']
    refHeb.innerText = data['calendar_items']['0']['heRef']
    descEng.innerText = data['calendar_items']['0']['description']['en']
    descHeb.innerText = data['calendar_items']['0']['description']['he']

    hafEng.innerText = data['calendar_items']['1']['displayValue']['en']
    hafHeb.innerText = data['calendar_items']['1']['displayValue']['he']

    dafEng.innerText = data['calendar_items']['2']['displayValue']['en']
    dafHeb.innerText = data['calendar_items']['2']['displayValue']['he']
    
    }
    

    catch (error) {
        // getParashah()
        console.log('The following error has occurred:', error)
    }
}

refreshParashah.addEventListener('click', getParashah);

    getParashah();