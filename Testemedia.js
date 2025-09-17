const prompt = require('prompt-sync')();

let notaA = Number(prompt('Qual a primeira nota: '));
let notaB = Number(prompt('Qual a segunda nota: '));
let notaC = Number(prompt('Qual a terceira nota: '));
let media1 = 5

function media(notaA, notaB, notaC){
    return ((notaA + notaB + notaC)/3)
}

function aprovar(notaA, notaB, notaC){
    return ((notaA + notaB + notaC)/2 >= media1) 
}

function verificador(verificacao){
    if(verificacao == true){
        return ("APROVADO");
    } else{
        return ("REPROVADO");
    }
}

console.log('A media do aluno é: ',(media(notaA, notaB, notaC)));
console.log('O aluno está: ', (verificador(aprovar(notaA, notaB, notaC))));
