const button = document.getElementById('menu-button')
const nav = document.getElementById('menu')
let $toggler = document.getElementById('toggler'),

function navToggle() {
    button.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('hidden no-scroll')
}

button.addEventListener('click', navToggle)

if ($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
} else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function () {
    $calculator.classList.toggle('dark');

    if ($calculator.classList.contains('dark')) {
        $toggler.querySelector('#light').style.display = 'block';
        $toggler.querySelector('#dark').style.display = 'none';
    } else {
        $toggler.querySelector('#light').style.display = 'none';
        $toggler.querySelector('#dark').style.display = 'block';
    }
})
