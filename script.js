// mobile menu toggle
const button = document.getElementById('menu-button')
const nav = document.getElementById('menu')

function navToggle() {
    button.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

button.addEventListener('click', navToggle)

//pull-down menu 
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-drop-down-button]")
    if (!isDropdownButton && e.target.closest('[data-drop-down]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-drop-down]')
        currentDropdown.classList.toggle('active')
    }

    //removes all other open dropdowns 
    document.querySelectorAll('[data-drop-down].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

//forced scrolling


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
