const openBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const overlay =  document.getElementById("overlay");
const mockups = document.getElementById("mockups");


openBtn.addEventListener("click", function () {
    closeBtn.style.display = "block";
    menu.style.display = "block";
    openBtn.style.display ="none";
    overlay.style.display = "block";
    mockups.style.visibility = "hidden";
    
})
closeBtn.addEventListener("click", function(){
    closeBtn.style.display = "none";
    menu.style.display = "none";
    openBtn.style.display = "block";
    overlay.style.display = "none";
    mockups.style.visibility = "visible";
   
});
