class Funcionario{
    nome
    salario
    constructor(nome,salario){
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    exibirInformacoes() {
        console.log(`Informações do Gerente:
            Nome: ${this.nome}
            Salário: ${this.salario}
            Departamento: ${this.departamento}`);
    }
}

class Vendedor extends Funcionario{
    percentualComissao
    constructor(nome, salario, percentualComissao){
        super(nome,salario)
        this.percentualComissao = percentualComissao;
    }

    calcularSalario(){
        let salarioAtualizado = this.salario + (this.salario * (this.percentualComissao / 100));
        return salarioAtualizado;
    }

    exibirInformacoes(){
        let salarioAtualizado = this.calcularSalario();
        console.log(`Informaçoes do Vendedor:
            Nome: ${this.nome}
            Salario ${this.salario}
            Salario com comissao ${salarioAtualizado}
            Percentual de Comissao ${this.percentualComissao}
        `);
    }
}

//Parte 2
class Produto{
    constructor(nome,valor){
        this.nome = nome;
        this.valor = valor;
    }
}

class Venda extends Vendedor{
    ListaDeProdutos = [];
    ValorTotal = 0;
   

    adcionarProduto(nome,valor){
        let novoProduto = new Produto(nome,valor);
        this.ListaDeProdutos.push(novoProduto);
    };

    CalcularTotal(){
        this.ValorTotal = 0
        for (let produto of this.ListaDeProdutos) {
            this.ValorTotal += produto.valor;
        }
    }

    FinalizarVenda(){
        console.log(`Informações do vendedor:
        Nome: ${this.nome}
    Valor Total:
        Valor total: ${this.ValorTotal}
    `);
}
}

const vendedor = new Vendedor("João", 5000, 10);
const venda = new Venda("João", 5000, 0);

venda.adcionarProduto("Produto1", 100);
venda.adcionarProduto("Produto2", 200);

venda.CalcularTotal();
venda.FinalizarVenda();