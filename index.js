

// LOGICA

const numFibo = 10;
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
console.log(result);