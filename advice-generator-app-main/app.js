const number = document.getElementById("number");
const quote = document.getElementById("quote")

const btn = document.getElementById("btn")



const getQuote = async () =>{
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    number.innerHTML = data.slip.id
    quote.innerHTML = `"${data.slip.advice}"`
}
getQuote()
btn.addEventListener("click",getQuote)