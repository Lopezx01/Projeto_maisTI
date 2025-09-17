class Cliente {
    constructor(nome,email,tel,CPF,carrinho = []){
        this.nome = nome;
        this.email = email;
        this.tel = tel;
        this.CPF = CPF;
        this.carrinho = carrinho;
    }
    getNome(){
        return this.nome
    }
    setNome(novoNome){
        this.nome = novoNome
    }
    getEmail(){
        return this.email
    }
    setEmail(novoEmail){
        this.email = novoEmail
    }
    getCpf(){
        return this.CPF
    }
    setCpf(novoCPF){
        this.CPF = novoCPF
    }
    getTelefone(){
        return this.tel
    }
    setTelefone(novoTelefone){
        this.tel = novoTelefone
    }
    getCarrinho(){
        return this.carrinho
    }
    comprarProduto(){
        return 'nao feito'
    }
    adicionarNoCarrinho(produto){
        this.carrinho.push(produto)
    }
}

class gerenciadorCliente{
    constructor(){
        this.lista = []
    }
    cadastrarCliente(nome,email,CPF,tel){
        let novoCliente = new Cliente(nome,email,CPF,tel)
        this.lista.push(novoCliente)
    }
    buscarCliente(CPF){
        for(let Cliente of this.lista){
            if(Cliente.getCPF() === CPF){
                return Cliente
            }
        }
        console.log('Cliente nao encontrado')
    }
}

let gerencia = new gerenciadorCliente();

gerencia.cadastrarCliente('alex', '111@gmail.com', '123.456.789.00', '7777777');
gerencia.cadastrarCliente('jose', '222@gmail.com', '123.456.789.01', '8888888');
gerencia.cadastrarCliente('tulio', '333@gmail.com', '123.456.789.02', '6666666');
gerencia.cadastrarCliente('felix', '444@gmail.com', '123.456.789.03', '2222222');

console.log(gerencia.lista);

const fs = require('fs');
const dados = JSON.stringify(gerencia.lista, null, 2);
fs.appendFileSync('dados.json', dados);
console.log('Arquivo criado!')
