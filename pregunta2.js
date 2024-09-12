let a = document.getElementById("talla").value
let b = document.getElementById("peso").value

let imc1 = b /(a*a)

document.getElementById("imc").innerHTML = imc1;