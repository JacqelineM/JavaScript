let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista);
console.log(listaIncluir);

for(let i = 0; i < listaIncluir.length ; i++){
    for(let j = 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}

console.log(lista);
//de forma mais simples

const listResult = [1, 2, ...listaIncluir, 5];

console.log (listResult);