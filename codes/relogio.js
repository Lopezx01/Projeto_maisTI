let seg = 0;
let min = 0;
let hora = 0;
function segundos(){
    seg +=1
}
function minutos(){
    if(seg == 60){
        min +=1;
        seg = 0;
    }
}

function hor(){
    if(min == 60){
        hora +=1
        min = 0
    }
}
while(true){
    segundos();
    minutos();
    hor();
    if(hora == 24){
        break;
    }
    console.log(hora,":",min,":",seg)
}

