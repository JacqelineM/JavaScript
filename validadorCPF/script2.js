//criando função para testar o java script
/*
console.log("Javascript carregado");

function validaCPF(cpf){
    return false; //determinado valor boolean como coloquei false exibe msg de erro
}

function validacao()
{
    console.log("Iniciando a validação CPF");
   var cpf =  document.getElementById('cpf_digitado').value;
  

   var resultadoValidacao = validaCPF(cpf);

   if(resultadoValidacao)
   {
       document.getElementById('success').style.display = 'block';

   }
   else{
    document.getElementById('error').style.display = 'block';
   }

}*/
// --------------------------------------------------------------------------------

//pegando elementos da caxa de texto no html e verificar se ele é válido

console.log("Javascript carregado");

function validaCPF(cpf)
{
    
    if(cpf.length != 11)
    {
        return false;

    }
    else //separando o cpf em numeros e digitos
    {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        
        var soma = 0; //variável de incremento;

        for(var i = 10; i > 1; i--)
        {
            soma += numeros.charAt(10 - i) * i;

        }
        

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // se o resultado do mod 11 é menor que 2  se caso verdeiro executo até o 0, se caso seja falso executo o resto da operaçao
       

          //validação do meu prmeiro digito
       if(resultado != digitos.charAt(0))
        {
            return false;
        }

       soma = 0;
       numeros = cpf.substring(0, 10);

       for(var k = 11; k > 1; k--)
        {
            soma += numeros.charAt(11 - k) * k;

        }
        
         resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
         
         //validação do segundo digito

         if(resultado != digitos.charAt(1))
         {
             return false;
         }
    
    return true;

    }


}

function validacao()
{
    console.log("Iniciando a validação CPF");
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
   
   var cpf =  document.getElementById('cpf_digitado').value;
  
   var resultadoValidacao = validaCPF(cpf);

   if(resultadoValidacao)
   {
       document.getElementById('success').style.display = 'block';

   }
   else{
    document.getElementById('error').style.display = 'block';
   }

}
//----------------------------------------------------------------------------------