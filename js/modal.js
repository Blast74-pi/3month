const modal = document.querySelector('.modal')
const modalTriggetButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = ''
}

const closeModal = () => {
    modal.style.display = 'none';
}

modalTriggetButton.onclick = openModal;
modalCloseButton.onclick = closeModal;
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}