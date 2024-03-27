const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');

const mainMenu = document.querySelector('#menu');


//sub menu

var openMenu = document.getElementsByClassName('nav-link');
var i;

var openMenuDesktop = document.getElementsByClassName('nav-link-desktop');

hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
    mainMenu.style.display = 'block';
})

closeBtn.addEventListener('click',()=>  {
    hamburger.style.display = 'block';
    closeBtn.style.display = 'none';
    mainMenu.style.display = 'none';

})



for( i = 0; i < openMenu.length; i++) {
    openMenu[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var subMenu = this.nextElementSibling;
        if( subMenu.style.display === "block"){
            subMenu.style.display = 'none';
        }else{
            subMenu.style.display = 'block';
        }
    });
}

for ( i = 0; i < openMenuDesktop.length; i++){
    openMenuDesktop[i].addEventListener('click', function(){
        this.classList.toggle("active");
        var subMenuDesktop = this.nextElementSibling;
        if(subMenuDesktop.style.display === "block"){
            subMenuDesktop.style.display = 'none';
        }else{
            subMenuDesktop.style.display = 'block';
        }

    });
}

