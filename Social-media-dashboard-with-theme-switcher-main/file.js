const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");
const circle = document.querySelector(".circle")

if(theme === "dark"){
    document.body.classList.add("dark")
}

toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(theme ==="dark"){
        window.localStorage.setItem("theme","light");
    }else{
        window.localStorage.setItem("theme", "dark");
    } 
})


