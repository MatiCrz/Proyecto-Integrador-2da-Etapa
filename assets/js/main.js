// aqui colocaremos las funciones de javascript
// Muestra titulos en nav
function changeClass(name) {
    document.getElementById(name).classList.remove("d-none");
  }
   
  function restClass(name){
    document.getElementById(name).classList.add("d-none");
  }