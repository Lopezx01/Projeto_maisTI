let car1 = "volvo"; 
let car2 = "nissan";
let car3 = "mercedes";
let array = [car1,car2,car3,1,2,3,'victor','maria','jose'];

function manipulaLista(lista){
    console.log('LISTA ORIGINAL:',lista, '\n');

    lista.push('Fabio'); // adiciona 'fabio no final da lista
    console.log('Nova lista com .push',lista);

    lista.pop(); // Remove o ultimo numero da lista
    console.log('nova lista com .pop()',lista);

    lista.unshift(223) // Adiciona '223' no começo da lista
    console.log('nova lista com .unshift',lista);

    lista.shift(); // remove o primeiro numero da lista
    console.log('Nova lista com .shift',lista);

    lista.slice(2); // retorna uma copia do array original com os elementos a partir da posição 2
    console.log('Nova lista com .slice',lista.slice(2));

    lista.slice(0,3);
    console.log('nova lista com .slice:',lista.slice(0, 3));
}
manipulaLista(array);
