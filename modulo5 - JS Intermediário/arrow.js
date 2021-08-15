function soma(x, y){
    return x + y; 
}
console.log(soma(3, 4));

// criando uma function dentro da variavel 
const multiplicacao = function (x, y){
     return x * y;
};

console.log(multiplicacao(5, 5));

//utilizando arrow vc não precisa dizer que é um functio (como se fosse um function anonima)

const dividir = (x, y) => {
    return x / y;
};

console.log(dividir(6, 2));

const objeto = () => ({nome: 'Jacque', sobrenome: 'Mendes'});

