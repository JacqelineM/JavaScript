

/*const result = 1 + "1";
console.log(result);

const x = true && false ? "ola mundo" : "nao foi dessa vez ";

console.log (x);

const a = 3;
const b = -2;
console.log((a && b) > 0 ?  "true " : "false");

const nome = false;
const nomeU = nome == true ? nome  : false;
console.log(nomeU);*/


const usuario = { nome: "Andressa", idade: 25 };
const { nome: usuarioNome = "Flavio", idade = 20 } = usuario;

console.log(Object.values(usuario));
//console.log(Object.values(usuarioNome));


const requisicao = async () =>
 {
    console.log("iniciando requisição")
    return true;
    console.log("fim da requisição")
}
    
    const processo = () => 
    {
    requisicao()
    console.log("fim da aplicação")
    }
    
    processo();
    console.log("processando");

    
