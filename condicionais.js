var nome = "Mendes de Paula";
/* utlizando condicionais if*/ 
if(nome === "Jacqueline")
{
    console.log("legal!!! Seu nome é este mesmo");

}
else if(nome === "Mendes de Paula"){
    console.log("tudo bem vc tambem serve");
}
else{
    console.log("que pena seu nome não é Jaqueline");

}
/* utlizando condicionais switch case*/ 
switch (nome)
{
    case "Jacqueline":
        console.log("legal!!! Seu nome é este mesmo!!!!"); 
        break;

    case "Mendes de Paula":
        console.log("Ah!!! vc também serve");
        break;

    default: console.log("que pena!!! vc não é quem eu pensava");
        break;


}