const button = document.getElementById('menu-button')
const nav = document.getElementById('menu')

function navToggle() {
    button.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

button.addEventListener('click', navToggle)


// let $toggler = document.getElementById('toggler'),
//     button.addEventListener('click', navToggle)

// if ($calculator.classList.contains('dark')) {
//     $toggler.querySelector('#light').style.display = 'block';
//     $toggler.querySelector('#dark').style.display = 'none';
// } else {
//     $toggler.querySelector('#light').style.display = 'none';
//     $toggler.querySelector('#dark').style.display = 'block';
// }

// $toggler.addEventListener('click', function () {
//     $calculator.classList.toggle('dark');

//     if ($calculator.classList.contains('dark')) {
//         $toggler.querySelector('#light').style.display = 'block';
//         $toggler.querySelector('#dark').style.display = 'none';
//     } else {
//         $toggler.querySelector('#light').style.display = 'none';
//         $toggler.querySelector('#dark').style.display = 'block';
//     }
// })
