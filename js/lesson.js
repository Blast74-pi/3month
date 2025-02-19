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


somInput.oninput = () => {

}

















