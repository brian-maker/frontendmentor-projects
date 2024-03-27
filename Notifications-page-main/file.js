const showComments = document.querySelector(".comments")
const person = document.querySelector(".person-1")


function showingComments(){
    person.addEventListener("mouseover", () =>{
        showComments.classList.remove("hidden")
    })
}
function hideComments(){
    person.addEventListener("mouseout", () =>{
        showComments.classList.add("hidden")
    })
}