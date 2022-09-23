//mobile-menu toggle
const button = document.getElementById('menu-button')
const nav = document.getElementById('menu')

function navToggle() {
    button.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

button.addEventListener('click', navToggle)

//social-menu toggle
const socialbutton = document.getElementById('social-button')
const socialnav = document.getElementById('social-menu')

function socialToggle() {
    socialbutton.classList.toggle('open')
    socialnav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

button.addEventListener('click', socialToggle)


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

//disable mobile scrolling url bar
window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

//theme toggler
/*let $toggler = document.getElementById('toggler'),
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
})*/

//Side-Bar Growth (active/inactve toggle)
function loadActive() {
    setTimeout(activate, 0);
    clearTimeout(activate);
  }
  
  function swapActive() {
    setTimeout(activate, 0);
    clearTimeout(activate);
  }
  
  function activate() {
    let windowHeight = Math.round(window.innerHeight);
    let windowWidth = Math.round(window.innerWidth);
    let aspectRatio = windowHeight / windowWidth;
    let distanceScrolledY = Math.round(window.scrollY);
    let distanceScrolledX = Math.round(window.scrollX);
    let sideLine = document.getElementsByClassName("side-line");
    let slideArray = Array.from(document.getElementsByClassName("box"));
    let sideLineArray = Array.from(sideLine);
    let scrollDown = document.getElementsByClassName("scroll-down-text");

    if (aspectRatio >= 0.95) {
      let indexer = Math.round(distanceScrolledX / windowWidth);
      for (let i = 0; i < slideArray.length; i++) {
        let i = indexer;
        let activesideLines = [];
        activesideLines.shift();
        activesideLines.unshift(sideLineArray[i]);
        let inactivesideLines = sideLineArray.slice();
        inactivesideLines.splice(i, 1);
        sideLineArray[i].classList.remove("inactive");
        sideLineArray[i].classList.add("active");
        inactivesideLines[0].classList.remove("active");
        inactivesideLines[0].classList.add("inactive");
        inactivesideLines[1].classList.remove("active");
        inactivesideLines[1].classList.add("inactive");
        inactivesideLines[2].classList.remove("active");
        inactivesideLines[2].classList.add("inactive");
        inactivesideLines[3].classList.remove("active");
        inactivesideLines[3].classList.add("inactive");
      }
    } else {
      let indexer = Math.round(distanceScrolledY / windowHeight);
      for (let i = 0; i < slideArray.length; i++) {
        let i = indexer;
        let activesideLines = [];
        activesideLines.shift();
        activesideLines.unshift(sideLineArray[i]);
        let inactivesideLines = sideLineArray.slice();
        inactivesideLines.splice(i, 1);
        sideLineArray[i].classList.remove("inactive");
        sideLineArray[i].classList.add("active");
        inactivesideLines[0].classList.remove("active");
        inactivesideLines[0].classList.add("inactive");
        inactivesideLines[1].classList.remove("active");
        inactivesideLines[1].classList.add("inactive");
        inactivesideLines[2].classList.remove("active");
        inactivesideLines[2].classList.add("inactive");
        inactivesideLines[3].classList.remove("active");
        inactivesideLines[3].classList.add("inactive");
      }
    }
  }
  
  window.addEventListener("load", loadActive);
  document.addEventListener("scroll", swapActive);
  window.addEventListener("resize", loadActive);

//Modal functionality
// function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//   }