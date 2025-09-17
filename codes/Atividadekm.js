let diaria = 90;
let km = 100;
let taxa = 12;
let diasAlugados = 1;
let kmrodados = 100;
let kmPodia = diasAlugados*km;
function pagarAmais(){
    if(kmPodia < kmrodados){
        return (kmrodados - kmPodia) * 12;
    } else {
        return 'não excedeu o limite de kilometros'
    }
}
console.log('Foi alugado por um total de:',diasAlugados,'dias');
console.log('Rodou num total de:',kmrodados,'kilometros')
console.log('O valor da taxa será:',pagarAmais());
