// comando para guardar dados
const fs = require('fs');
// comando para solicitar ao usuario
const prompt = require('prompt-sync')();

function soma(a,b){
    return a+b;
}

function subtracao(a,b){
    return a-b;
}

function multiplicacao(a,b){
    return a*b;
}

function divisao(a,b){
    return a/b;
}

let opcao, a, b;

do{
    console.log("- Menu Calculadora -");
    console.log("1 - Soma -----------");
    console.log("2 - Subtracao ------");
    console.log("3 - Multiplicacao --");
    console.log("4 - Divisao --------");
    console.log("5 - Sair do Programa");
    opcao = Number(prompt("\nInsira a opcao: "));

    switch(opcao){
        case 1:
            a = Number(prompt("\nInsira o numero A: "));
            b = Number(prompt("Insira o Numero B: "));
            // Mostrando o resultado
            console.log("Resultado", soma(a,b));
            // Guardando Historico
            fs.appendFileSync("historicoCalculadora.txt", a + "+" + b + "=" + soma(a,b) + "\n");
            break;
        case 2:
            a = Number(prompt("\nInsira o numero A: "));
            b = Number(prompt("Insira o Numero B: "));
            // Mostrando Resultado
            console.log("Resultado:", subtracao(a,b))
            // Guardando Historico
            fs.appendFileSync("historicoCalculadora.txt", a + "-" + b + "=" + subtracao(a,b) + "\n");
            break;
        case 3:
            a = Number(prompt("\nInsira o numero A: "));
            b = Number(prompt("Insira o Numero B: "));
            // Mostrando Resultado
            console.log("Resultado:", multiplicacao(a,b));
            // Guardando historico
            fs.appendFileSync("historicoCalculadora.txt", a + "x" + b + "=" + multiplicacao(a,b) + "\n");
            break;
        case 4:
            a = Number(prompt("\nInsira o numero A: "));
            b = Number(prompt("Insira o Numero B: "));
            // Mostrando Resultado
            console.log("Resultado:", divisao(a,b));
            // Guardando Historico
            fs.appendFileSync("historicoCalculadora.txt", a + "/" + b + "=" + divisao(a,b) + "\n");
            break;
        case 5:
            console.log("Fim do programa")
            break;
    }
}while(opcao!=5)
