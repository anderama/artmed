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

const accordionItems = document.querySelectorAll('.contentBx')

// 1. Selecionar cada item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.label')

    // 2. Selecionar cada click do header
    accordionHeader.addEventListener('click', () =>{
        // 7. Criar a variável
        const openItem = document.querySelector('.active-accordion')
        
        // 5. Chamar a função toggle item
        toggleItem(item)

        // 8. Validar se a classe existe
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Criar uma função do tipo constante
const toggleItem = (item) =>{
    // 3.1 Criar a variável
    const accordionContent = item.querySelector('.content')

    // 6. Verificar se existe o elemento com a classe active-accordion 
    if(item.classList.contains('active-accordion')){
        accordionContent.removeAttribute('style')
        item.classList.remove('active-accordion')
    }else{
        // 4. Agregar a altura máxima do content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('active-accordion')
    }
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