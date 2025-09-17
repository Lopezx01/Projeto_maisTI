const prompt = require('prompt-sync')();
let salario = Number(prompt('Informe o seu salario: '));
let tipo = prompt('Qual tipo de porcentagem voce escolhe A ou B: ');
let futuro = Number(prompt('Calculo de projeção financeira para futuro(em meses): '))
function calcularTipo(salario,tipo){
    if(tipo == 'a' || tipo =='A'){
        guardar = (salario * 30) / 100;
        gastar = (salario * 70) / 100;
        projecao = (guardar * futuro);
        return console.log(` 
            O valor possivel para gastos em geral é de: ${gastar}\n 
            O valor necessario parar reserva é de: ${guardar})\n
            O valor de projeção para o seu futuro é de: ${projecao}`)
    }else if(tipo == 'b' || tipo == 'B'){
        guardar = (salario * 20) / 100;
        necessidades = (salario * 50) / 100;
        gastar = (salario * 30) / 100;
        projecao = (guardar * futuro);
        return console.log(`
             O valor necessario para reserva é de : ${guardar} \n 
             o valor para gastos de necessidade é de: ${necessidades}\n 
             o valor para gastos pessoais é de : ${gastar} \n
             O valor de projeção para o seu futuro é de: ${projecao}`)
    }else{
        console.log('Opção invalida');
    }
}
console.log(calcularTipo(salario,tipo));
