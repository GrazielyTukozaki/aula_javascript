/* var nome = "Graziely Tukozaki";
var idade1 = 25;
var idade2 = 10;
var frase = "França é o melhor time do mundo";
var n1 = 8;
var n2 = 4;
alert (nome + " tem " + idade1 + " anos.");
alert (idade1 + idade2);
console.log (nome);
console.log (idade1+idade2);
console.log (frase); 
console.log (frase.replace ("França", "Espanha")); 
console.log (frase.toUpperCase()); 
console.log (frase.toLowerCase()); 
console.log (n1*n2);

var lista = ["uva", "maçã verde", "lichia"];
lista.push ("abacate");
lista.pop ();
console.log(lista);
console.log (lista.length);
console.log (lista.reverse());
console.log (lista.toString());
console.log (lista.join(" | "));

var fruta = {nome: "maçã" , cor: "vermelha"}
console.log (fruta);
console.log (fruta.nome);

var frutas = [{nome: "maçã" , cor: "vermelha"}, {nome: "abacate" , cor: "verde"}]
console.log (frutas);

var idade = prompt ("Qual sua idade?");
if (idade > 18){
    alert ("Maior de idade");
} else {
    alert ("Menor de idade");
} ; 

var count = 0;

while (count <= 5) {
    console.log (count);
//    count = count + 1;
      count ++;
}; 

var count;
for (count  = 0; count <= 5; count++) {
    console.log(count);
};  


var d = new Date ();
alert (d.getMonth()+1);
alert ("São " + d.getMinutes() + " minutos");



function soma (n1,n2){
    return n1 + n2;
}

function validaIdade (idade){
    var validar;
    
    if (idade >=18) {
        validar = true;
    } else {
        validar = false;
    }  
    return validar;  
}

var idade = prompt ("Qual sua idade?");
console.log(validaIdade(idade));

 
*/

function clicou (){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert ("Obrigado por clicar");
};

function redirecionar (){
    window.open ("https://markmarketing.com.br/"); //abre em página diferente
  //  window.location.href = "https://markmarketing.com.br/"; //abre na mesma pagina
}

function trocar (elemento){
   // document.getElementById ("mousemove").innerHTML = "Obrigado por passar o mouse"; 
   // alert ("Trocar texto");
  elemento.innerHTML =  "Obrigado por passar o mouse"; 
}

function voltar (elemento){
    // document.getElementById ("mousemove").innerHTML = "Passe o mouse aqui"; 
   // alert ("Trocar texto");
   elemento.innerHTML =  "Passe o mouse aqui"; 
}

function load (){
    alert ("Página carregada");
}

function funcaoChange (elemento){
    console.log (elemento.value); 
}