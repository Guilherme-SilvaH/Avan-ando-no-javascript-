
class Livro{
    titulo
    autor
    editora
    ano_de_publicacao
    disponibilidade 
    constructor(titulo,autor,editora,ano_de_publicacao,disponibilidade = true){
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano_de_publicacao = ano_de_publicacao;
        this.disponibilidade = disponibilidade;
    };

}


class Biblioteca{
    constructor(nome, endereco, telefone) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.acervoDeLivros = [];
    }

    adicionarLivro(livro) {
        this.acervoDeLivros.push(livro);
    }

    buscarLivro(nomeLivro) {
        const livroEncontrado = this.acervoDeLivros.find(livro => livro.titulo === nomeLivro);

        if (livroEncontrado) {
            console.log(`Informações do livro "${nomeLivro}":`);
            console.log(`Título: ${livroEncontrado.titulo}`);
            console.log(`Autor: ${livroEncontrado.autor}`);
            console.log(`Editora: ${livroEncontrado.editora}`);
            console.log(`Ano de Publicação: ${livroEncontrado.ano_de_publicacao}`);
            console.log(`Disponibilidade: ${livroEncontrado.disponibilidade ? 'Disponível' : 'Indisponível'}`);
        } else {
            console.log(`Livro "${nomeLivro}" não encontrado na biblioteca.`);
        }
    }

    emprestarLivro(nomeLivro) {
        const livroEncontrado = this.acervoDeLivros.find(livro => livro.titulo === nomeLivro);

        if (livroEncontrado) {
            if (livroEncontrado.disponibilidade) {
                livroEncontrado.disponibilidade = false;
                console.log(`Livro "${nomeLivro}" emprestado com sucesso.`);
                return true;
            } else {
                console.log(`Livro "${nomeLivro}" indisponível para empréstimo.`);
                return false;
            }
        } else {
            console.log(`Livro "${nomeLivro}" não encontrado na biblioteca.`);
            return false;
        }
    }

    devolucaoLivro(nomeLivro) {
        const livroEncontrado = this.acervoDeLivros.find(livro => livro.titulo === nomeLivro);

        if (livroEncontrado) {
            if (livroEncontrado.disponibilidade === false) {
                livroEncontrado.disponibilidade = true;
                console.log(`Livro "${nomeLivro}" devolvido com sucesso.`);
                return true;
            } else {
                console.log(`Livro "${nomeLivro}" não foi emprestado.`);
                return false;
            }
        } else {
            console.log(`Livro "${nomeLivro}" não encontrado na biblioteca.`);
            return false;
        }
    }
}




let persyjackson = new Livro("Ladrão de Raios", "Gui", "idontnow", 2010,)
let oPoderDosQuietos = new Livro("oPoderDosQuietos", "Susan Cain", "Gui2", 2012)


// Criar instância da classe Biblioteca
let bibliotecaExemplo = new Biblioteca("Biblioteca Central", "Rua Principal, 123", "123-456-7890");

// Adicionar livros ao acervo da biblioteca
bibliotecaExemplo.adicionarLivro(persyjackson);
bibliotecaExemplo.adicionarLivro(oPoderDosQuietos);

// Exemplo de utilização dos métodos da biblioteca
bibliotecaExemplo.buscarLivro("oPoderDosQuietos");
bibliotecaExemplo.emprestarLivro("Ladrão de Raios");
bibliotecaExemplo.devolucaoLivro("Ladrão de Raios");