// window.addEventListener("scroll", function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })
const nav = document.querySelector('#main')

function fixNav() {  
  console.log('The window was scrolled')
}

window.addEventListener('scroll', fixNav)  

const topOfNav = nav.offsetTop  

function fixNav() {  
    if (window.scrollY >= topOfNav) {
      document.body.classList.add('fixed-nav')
    } else {
      document.body.classList.add('fixed-nav')
    }
  }

  
  function fixNav() {  
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px'
      document.body.classList.add('fixed-nav')
    } else {
      document.body.style.paddingTop = 0
      document.body.classList.remove('fixed-nav')
    }
  }