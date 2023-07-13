

let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
let totalPeople = 0 
let totalEl = document.getElementById("total-el")
function increment () {
    count = count + 1
    countEl.textContent = count
}



function save() {
 let previousEntries =  count + " - "

 saveEl.textContent += previousEntries
 totalPeople += count // Suma el valor actual de 'count' al total de personas
 totalEl.textContent = "Total of people: " + totalPeople

 count = 0


}

