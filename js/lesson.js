// Phone checker

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}
//INDEX - параметр
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let tabIndex = 0

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = "none"
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabItems[index]. classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent()
    tabIndex = (tabIndex + 1) % tabItems.length
    showTabContent(tabIndex)
}

hideTabContent()
showTabContent()
setInterval(switchTab, 3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                tabIndex = i
                showTabContent(tabIndex)
            }
        })
    }
}

const scrollHandler = () => {
    if ((window.scrollY + window.innerHeight) >= document.body.offsetHeight - 1) {
        openModal()
    }
}

window.removeEventListener('scroll', scrollHandler)

//CONVERTER

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = async () => {
        console.log(targetElement1.id, targetElement2.id)
        try{
            const response = await fetch(`../data/converter.json`)
            const data = await response.json()

                if (targetElement1.id ==="som" && targetElement2.id ==="eur") {
                    targetElement1.value = (element.value * data.usd).toFixed(2);
                    targetElement2.value = (targetElement1.value / data.eur).toFixed(2);
                }
                if (targetElement1.id ==="usd" && targetElement2.id === "eur") {
                    targetElement1.value = (element.value / data.usd).toFixed(2);
                    targetElement2.value = (element.value / data.eur).toFixed(2);
                }
                if(targetElement1.id ==="usd" && targetElement2.id === "som") {
                    targetElement2.value = (element.value * data.eur).toFixed(2);
                    targetElement1.value = (targetElement2.value / data.usd).toFixed(2);
                }
                if (element.value === "") {
                    targetElement1.value = "";
                    targetElement2.value = "";
                }
        }catch (e) {
            console.log(e)
        }
    }
}

converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, usdInput, somInput)

//CARD SWITCHER

const cardBlock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let cardId = 0
let maxId = 200

const cardSwitcher = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos${cardId}`)
        const data = await response.json()
        const {title, completed, id} = data[cardId]
        cardBlock.innerHTML = `
            <div class="todo">
                <h3>${title}</h3>
                <p>${completed}</p>
                <span>${id}</span>
            </div>`
    } catch (e) {
        console.log(e)
    }
}

const cardSwitcherNext = () => {
    if(cardId >= maxId) {
        cardId = 0
    } else {
        cardId++
    }
    cardSwitcher()
}

const cardSwitcherPrev = () => {
    if(cardId <= 0) {
        cardId = maxId
    } else {
        cardId--
    }
    cardSwitcher()
}

cardSwitcher()
btnNext.onclick = () => cardSwitcherNext()
btnPrev.onclick = () => cardSwitcherPrev()

//WEATHER

const searchInput = document.querySelector('.cityName')
const searchBtn = document.querySelector('#search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const API_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_TOKEN = 'e417df62e04d3b1b111abeab19cea714'

searchBtn.onclick = async () => {
    try {
        const response = await fetch(`${API_URL}?appid=${API_TOKEN}&q=${searchInput.value}&lang=ru&units=metric`)
        const data = await response.json()
        city.innerHTML = data.name || 'Город не найден'
        temp.innerHTML = data.main?.temp ? Math.round(data.main.temp) + '°С' : ''
    }catch (e) {
        console.log(e)
    }
    searchInput.value = ''
}














