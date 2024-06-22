const formMathFibo = document.getElementById("formMathFibo")
const valueMathFibo = document.getElementById("valueMathFibo");
const resultFibo = document.getElementById("resultFibo")
const numMathFibo = document.getElementById("numMathFibo")


//ESCUCHADOR
formMathFibo.addEventListener("submit", (e)=>{
    e.preventDefault();

    const numFibo = valueMathFibo.value
   
    // ES VALOR NUMERICO
    if (isNaN(numFibo)) {
        msgError.style.backgroundColor = "#ffd1d1";
        return (msgError.textContent = "Debe Ingresar un número");
      }
    
      //   EVALUAR SI EL VALOR ES UN NÚMERO POSITIVO
      if (numFibo <= 0) {
        msgError.style.backgroundColor = "#ffd1d1";
        return (msgError.textContent =
          "Debe ingresar un número positivo mayor a 0");
      }
    
    //   //   MODIFICAR ESTILOS CUANDO NO SE PRESENTEN ERRORES
      msgError.style.backgroundColor = "transparent";
      msgError.textContent = "";
    
    // LOGICA

let numA = 0;
let numB = 1;
let secuencia = 0;
let result = "";

for (let i = 0; i < numFibo; i++ ){
    
    if (i <= 1 ){
        secuencia = i;  
    } else {
        secuencia = numA + numB
        numA = numB
        numB = secuencia
    }
    result += secuencia + ", "
}



resultFibo.textContent =result
})

