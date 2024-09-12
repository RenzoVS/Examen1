const a =new Date().getFullYear();
console.log(a)

let b = document.getElementById("nacimiento").value


console.log(parseInt(b));

let edad = a-b;
document.getElementById("edad").value = edad;


