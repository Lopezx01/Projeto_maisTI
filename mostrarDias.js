/*let ano = 2024;
let mes = 4;
function bissexto(ano){
    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        return true
    } else {
        return false
    }
}

function obterDias(ano,mes){
    if(mes == 1 || mes == 3 ||mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        return 31;
    } else if ( mes == 4 || mes == 6 || mes == 9 || mes == 11){
        return 30;
    } else if ( mes == 2 && bissexto(ano) == true){
        return 29;
    } else if ( mes == 2 && bissexto(ano) == false){
        return 28;
    }
}

console.log('o mes informado tem:',obterDias(ano,mes));*/

/*let ano = 2024;
let mes = 2;
function bissexto(ano){
    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        return true
    } else {
        return false
    }
}

function obterDias(ano,mes){
    if(mes == 1){
        return 31;
    } else if(mes == 2 && (bissexto(ano) == false)){
        return 28;
    } else if(mes == 2 && (bissexto(ano) == true)){
        return 29;
    } else if(mes == 3){
        return 31;
    } else if(mes == 4){
        return 30;
    } else if(mes == 5){
        return 31;
    } else if(mes == 6){
        return 30;
    } else if(mes == 7){
        return 31;
    } else if(mes == 8){
        return 31;
    } else if(mes == 9){
        return 30;
    } else if(mes == 10){
        return 31;
    } else if(mes == 11){
        return 30;
    } else if(mes == 12){
        return 31;
    }
}
console.log('o mes informado tem:',obterDias(ano,mes));*/

let ano = 2024;
let mes = 2;
function bissexto(ano){
    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        return true
    } else {
        return false
    }
}

function obterDias(ano,mes){
    if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        return 31;
    } else if ( mes == 4 || mes == 6 || mes == 9 || mes == 11){
        return 30;
    } else if ( mes == 2 && bissexto(ano) == true){
        return 29;
    } else if ( mes == 2 && bissexto(ano) == false){
        return 28;
    }
}

console.log('o mes informado tem:',obterDias(ano,mes));
