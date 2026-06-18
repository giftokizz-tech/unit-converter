/* 
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("covert-btn")
const meterFeetEl = document.getElementById("meters-feet-el")
const litterGallonEl = document.getElementById("litters-gallons-el")
const kiloPoundsEl = document.getElementById("kilos-pounds-el")


convertBtn.addEventListener("click", function(){
    let num = Number(inputEl.value)
    lengthm()
    volume()
    mass()
    
})

function lengthm() {
    let num = Number(inputEl.value)
    let feet = num * 3.281
    let meter = num / 3.281
    meterFeetEl.textContent = num <= 1 ? `
    ${num} meter = ${feet.toFixed(2)} feet | ${num} foot = ${meter.toFixed(2)} meters
    ` : `
    ${num} meters = ${feet.toFixed(2)} feet | ${num} feet = ${meter.toFixed(2)} meters
     `
}
lengthm()


function volume() {
    let num = Number(inputEl.value)
    let liters = num * 3.785
    let gallons = num / 3.785
    litterGallonEl.textContent = num <= 1 ? `
    ${num} liter = ${gallons.toFixed(2)} gallons | ${num} gallon = ${liters.toFixed(2)} liters
    ` : `
     ${num} liters = ${gallons.toFixed(2)} gallons | ${num} gallons = ${liters.toFixed(2)} liters
     `
}
volume()

function mass() {
    let num = Number(inputEl.value)
    let kilo = num / 2.204
    let pounds = num * 2.204
    kiloPoundsEl.textContent = num  <= 1 ? `
    ${num} kilo = ${pounds.toFixed(2)} pounds | ${num} pound = ${kilo.toFixed(2)} kilos
        ` : `
     ${num} kilos = ${pounds.toFixed(2)} pounds | ${num} pounds = ${kilo.toFixed(2)} kilos
         `
    }
    mass()