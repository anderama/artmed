// HEADER SCROLL

function scrollHeader(){
  const nav = document.getElementById('header');

  if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);

// MENU MOBILE

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active-menu-mobile');
      toggle.classList.toggle('active-bx');
    })
  }
}

showMenu('bx', 'menu-mobile');

// ACCORDION

const accordion = document.getElementsByClassName('contentBx');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active-accordion');
  })
}

//Modal
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active-modal')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active-modal")
  modalOverlay.querySelector("iframe").src = ""
})