function soma(operadorA, operadorB)
{
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

//função que não precsa armazenar valor
function olaGama(nome)
{
    console.log("Olá Gama!, voce é a: " + nome);
}

var resultadoDaSoma = soma(1,2);
var resultadoNovoDaSoma  = soma (10,66);

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaGama("Jacque");