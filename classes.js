class Matematica
{
    soma(valorA, valorB)
    {
        return valorA + valorB;
    }

    subtracao(valorA, valorB)
    {
        return valorA - valorB;
    }

    multiplicacao(valorA, valorB)
    {
        return valorA * valorB;
    }

    divsao(valorA, valorB)
    {
        return valorA / valorB;
    }
}

var instanciaMatematica = new Matematica(); //criando uma instancia em memoria

var resultado1 = instanciaMatematica.soma(6,2);
var resultado2 = instanciaMatematica.subtracao(6,2);
var resultado3 = instanciaMatematica.multiplicacao(6,2);
var resultado4 = instanciaMatematica.divsao(6,2);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);