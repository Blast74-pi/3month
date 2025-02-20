// Gmail

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
const maxWight = parentBlock.clientWidth  - childBlock.clientWidth
const maxHeigth = parentBlock.clientHeight - childBlock.clientHeight

let x = 0
let y = 0

const move = () => {
    if(x < maxWight) {
        x++
        childBlock.style.left = `${x}px`
        requestAnimationFrame(move)
    } else if (x >= maxWight && y <= maxHeigth) {
        y++
        childBlock.style.top = `${y}px`
        requestAnimationFrame(move)
    }
    else if (x > 0 && y > 0) {
        x--
        childBlock.style.left = `${x}px`
        requestAnimationFrame(move)
    }
}
move()

const hourElement = document.querySelector('#hour')
const minuteElement = document.querySelector('#minute')
const secondElement = document.querySelector('#minutes')
const millisecondElement = document.querySelector('#seconds')

const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const btnReset = document.querySelector('#reset')

btnStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

btnStop.addEventListener('click', () => {
    clearInterval(interval)
})
btnReset.addEventListener('click', () => {
    clearInterval(interval)
        hour = 0o0,
        minute = 0o0,
        minutes = 0o0,
        seconds = 0o0,
            hourElement.textContent = '00'
            minuteElement.textContent = '00'
            secondElement.textContent = '00'
            millisecondElement.textContent = '00'
})

let hour = 0o0,
    minute = 0o0,
    minutes = 0o0,
    seconds = 0o0,
    interval

function startTimer() {
    seconds++
    if (seconds < 9) {
        millisecondElement.innerText = '0' + seconds
    }
    if (seconds > 9) {
        millisecondElement.innerText = seconds
    }
    if (seconds > 99) {
        minutes++
        secondElement.innerText = '0' + minutes
        seconds = 0
        millisecondElement.innerText = '0' + seconds
    }
    if (minutes < 9) {
        secondElement.innerText = '0' + minutes
    }
    if (minutes > 9) {
        secondElement.innerText = minutes
    }
    if (minutes > 59) {
        minute++
        minuteElement.innerText = '0' + minute
        minutes = 0
        secondElement.innerText = minutes
    }
    if (minute < 9) {
        minuteElement.innerText = '0' + minute
    }
    if (minute > 9) {
        minuteElement.innerText = minute
    }
    if (minute > 59) {
        hour++
        hourElement.innerText = '0' + hour
        minute = 0
        minuteElement.innerText = minute
    }
}

const characterList = document.querySelector('.characters-list')

const renderCharacters = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '../data/characters.json')
    request.setRequestHeader('Content_type', 'application/json')
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        data.forEach(item => {
            const characterBlock = document.createElement('div')
            characterBlock.classList.add('character-card')

            characterBlock.innerHTML = `
                <div class="character-photo">
                    <img src="${item.photo}" alt="${item.name}">
                </div>
            `

            characterList.appendChild(characterBlock)
        })
    }
}

renderCharacters()

// characterList.forEach((character) => {
//     console.log(character.name, character.age)
//     const request = new XMLHttpRequest()
//
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//     }
//     const characterCard = document.createElement('div')
//     characterCard.setAttribute('class', 'character-card')
//
//     characterCard.innerHTML = `
//         <h3>${character.name}</h3>
//     `
//
//     wrapper.appendChild(characterCard)
// })


















