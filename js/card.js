const cardList = document.querySelector('.card_list')

const renderCards = async () => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()

        data.forEach(item => {
            const cardBlock = document.createElement('div')
            cardBlock.classList.add('card-cards')

            cardBlock.innerHTML = `
                    <div class="character-photo">
                        <img src="images/giratinaaltered.webp" alt="${data.title}">
                    </div>
                `

            cardList.appendChild(cardBlock)
        })
    }catch (e) {
        console.log(e)
    }
}

renderCards()