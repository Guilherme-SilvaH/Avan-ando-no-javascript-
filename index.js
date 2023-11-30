//orientação a objeto

//vantagem - aumenta flexibilidade e facilidade de manuntenção do codigo com reaproveitamento e espelhando o mundo real.

//relembrando conceitos

//clase:
// é uma estrutura de dadoss que contem comportamentos e propriedades, serve como uma definicação de estrutura

//objeto:
// é a instancia da nossa classe, quando instanciamos uma classe criamoss um objeto, nesse momento alocamos espaço na nosssa memoria para guardar sua propriedades 


//metodo contrutor

//o construtor é um metodo que sempre sera executado na cricao da classe. voce pode ter parametros ou nao, e contar com mais de uma opção de construtor. deve ter o mesmo nome da clsse


class Pessoa{
    nome
    idade

    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
        console.log("ola estou contruindo uma pessoa");
    }
    falar(texto){
        console.log(texto);
    }
}



class Motorista extends Pessoa{
    carro
    constructor(nome, idade, carro){
        super(nome, idade) //para char o constructor da classe pai, que no caso seria o de "pessoas"
        this.carro = carro //como a propriedade carro nao faz parte de "pessoa", temos que passar o this para ele
    };  

    ultrapassar(){
        console.log("Ultrapassei alguem");
    }
}


//let carroFiesta = new carro()
//carroFiesta.modelo = "Fiesta"
//carroFiesta.cor = "vermelha"
//carroFiesta.ano = 2016

let primeiraPessoa = new Pessoa("Guilherme", 20)
let primeiroMotorista = new Motorista("Claudio", 25, "carroFiesta")

primeiroMotorista.falar("Eu sou o motorista Claudio");
