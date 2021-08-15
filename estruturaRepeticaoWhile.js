/*var achou = false;

while(!achou)
{
    console.log("achou");
}
*/

/*var tabuada = 7;
var repeticoes = 10;
var resultado;

while(repeticoes <= 10)
{
    resultado = tabuada * repeticoes;
    console.log("O valor da é: " + tabuada + " x " + repeticoes + " = " + resultado);

}*/

var achou = false;
var numeroSorteado = 10;
var possivelValor = 0;


while(!achou)
{
    possivelValor += 1;
    
    if(numeroSorteado === possivelValor)
    {
        achou = true;

    }
    else
    {
        console.log("Possível valor não corresponde ao número sorteado:  " + possivelValor);
    }
}