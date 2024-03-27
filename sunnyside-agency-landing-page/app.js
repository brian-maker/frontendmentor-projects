const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu-wrapper")

function toggleMenu() {
    // Toggle the 'open' class to show/hide the menu
    menu.classList.toggle('open');
  }

hamburger.addEventListener("click", function(){
    toggleMenu();
})