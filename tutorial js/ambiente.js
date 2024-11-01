const Pessoa = {nome:"", sobrenome:"", idade:""};
const aluno = Pessoa;

Pessoa.nome = "carlos";
Pessoa.sobrenome = "teixeira";
Pessoa.idade = 28;

aluno.idade = 24;

console.log(Pessoa);
console.log(aluno);
console.log(typeof(aluno));