class Familia{
    constructor(nomePai, nomeMae, listaDfilhos){
        this.nomePai = nomePai;
        this.nomeMae = nomeMae;
        this.listaDfilhos = listaDfilhos;
    }

    adicionarfilhos(filhoNovo){
        this.listaDfilhos.push(filhoNovo);
    }
    numeroDfilhos(){
        return this.listaDfilhos.length;
    }
}
// definindo o nome dos integrantes da familia
let familia1 = new Familia('eduardo', 'monica', ['joao','maria'])
// chamando os nomes pra mostrar na tela
console.log(familia1.nomePai);
console.log(familia1.nomeMae);
console.log(familia1.listaDfilhos);
//adicionando um novo filho a lista
familia1.adicionarfilhos("Carlos");
//vendo a nova lista
console.log(familia1.listaDfilhos);
// contagem total da lista de filhos
console.log(familia1.numeroDfilhos());
