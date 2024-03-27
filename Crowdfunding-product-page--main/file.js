const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closebtn");
const openBtn = document.getElementById("openbtn");

const modal = document.getElementById("modal-container");
const modalThanks = document.getElementById("modal-container-thanks");
const container = document.querySelector("#container-2");
const container3 = document.querySelector("#container-3");



const bookMarkBtn = document.getElementById("bookmarkbtn");
const submitBtn = document.getElementById("submit");
const gotItBtn = document.getElementById("got-it");


const hidden1 = document.getElementById("hidden-1");
const hidden2 = document.getElementById("hidden-2");

const radio1 = document.getElementById("radio-1");
const radio2 = document.getElementById("radio-2");



// show hidden pledge for bamboo stand

radio1.addEventListener("click", function(){
  if(hidden1.style.display =="none"){
    hidden1.style.display="block"
    container.classList.add("container-border");
  }else{
    hidden1.style.display="none";
    container.classList.remove("container-border");

  }
 

})

// show hidden pledge for black edition stand
radio2.addEventListener("click", function(){
    if(hidden2.style.display =="none"){
      hidden2.style.display="block"
      container3.classList.add("container-border");
    }else{
      hidden2.style.display="none";
      container3.classList.remove("container-border");
  
    }
   
  
  })



// When the modal is shown, we want a fixed body
document.body.style.position = 'fixed';
document.body.style.top = `-${window.scrollY}px`;

// When the modal is hidden, we want to remain at the top of the scroll position
document.body.style.position = '';
document.body.style.top = '';

// When the modal is hidden...
const scrollY = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);




// event listener for thanks modal
gotItBtn.addEventListener("click",hideThanksModal);



// open menu
function openMenu(){
    if(menu.style.display =="none"){
        menu.style.display = "block";
        openBtn.style.display ="none";
        closeBtn.style.display = "block";
    }else{
        menu.style.display="none";
        openBtn.style.display="block";
        closeBtn.style.display="none"
    }
}

// show first modal
function showModal(){
    if(modal.style.display == "none"){
        modal.style.display ="block";
    }else{
        modal.style.display ="none"
    }
}
//hide first modal
function hideModal(){
    if(modal.style.display == "block"){
        modal.style.display ="none";
    }else{
        modal.style.display ="block"
    }
}
// hide modal
window.addEventListener('click', function(e){
    if(e.target === modal) {
        modal.style.display = 'none'
    }
})
//add as bookmarked
bookMarkBtn.addEventListener("click", () => {
    bookMarkBtn.classList.toggle("bookmarked");
  });



//show thanks modal
function showThanksModal(){
if(modalThanks.style.display == "none"){
    modalThanks.style.display ="block";
}else{
    modalThanks.style.display ="none"
}
}

// hide thanks modal
function hideThanksModal(){
    if(modalThanks.style.display == "block"){
        modalThanks.style.display ="none";
    }else{
        modalThanks.style.display ="block"
    }
}
window.addEventListener('click', function(e){
    if(e.target === modalThanks) {
        modalThanks.style.display = 'none'
    }
});