const textoNaoEstruturado = 'meu cpf é 123.456.569-22';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(textoNaoEstruturado.match(regex));
