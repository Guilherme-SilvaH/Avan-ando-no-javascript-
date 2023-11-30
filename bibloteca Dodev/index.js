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
    }
}

let persyjackson = new Livro("Ladrao de Raios", "Gui", "idontnow", 2010,)
console.log(persyjackson.disponibilidade);