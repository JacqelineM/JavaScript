const pessoa = {
    nome: 'jacqueline',
    sobrenome: 'mendes',
    idade: '29',
    profissao: 'reporter'

};

console.log(pessoa);
// maneira antiga de pegar objeto
/*let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;*/

// usando destruct

let {nome, sobrenome, idade, profissao} = pessoa;

console.log(nome, sobrenome, idade, profissao);