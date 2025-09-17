let a = 10;
let b = 10;
let c = 15;
let semi = (a+b+c)/2; // calcular semiperimetro
console.log('O valor do semiperimetro é: ',semi);
function formarTriangulo(){
    if(a + b > c && a + c > c && b + c > c){
        return true;
    } else {
        return false;
    }
}
function calcularArea(a,b,c,semi){
    if (formarTriangulo()==true){
        formulaHeron = Math.sqrt(semi*(semi-a)*(semi-b)*(semi-c)).toFixed(2)
        return formulaHeron
    } else {
        return false;
    }
}
console.log("A area do trinagulo é:",calcularArea(a,b,c,semi));
console.log(formarTriangulo()); 
