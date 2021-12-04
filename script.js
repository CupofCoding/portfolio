const button = document.getElementById('menu-button')
const nav = document.getElementById('menu')

function navToggle() {
    button.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('hidden no-scroll')
}

button.addEventListener('click', navToggle)