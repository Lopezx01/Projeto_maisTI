class Animais {
    constructor(animal, especie, vertOuInvert){
        this.animal = animal;
        this.especie = especie;
        this.vertOuInvert = vertOuInvert;
    }
    coluna(){
        if (this.especie != "Ameba"){
            return this.vertOuInvert = "Vertebrado";
        }
        else {
            return this.vertOuInvert = "Invertebrado"
        }
    }
}

let animal1 = new Animais('Leao', 'Felino');

console.log('O animal é um:',animal1.animal);
console.log('Da especie dos:',animal1.especie);
console.log('Ele é um animal:', animal1.coluna());
