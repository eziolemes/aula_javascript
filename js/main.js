var nome = "Ezio Lemes";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var n1 = 5;
var n2 = 3;
var lista = ["maça","pera", "laranja"];
lista.push("uva"); //incluir item
lista.pop(); //remove item

//Dicionario, similar a um json
var fruta = {nome:"maça", cor:"vermelha"}; // um único objeto
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; // vários objetos

//controle de fluxo
var idade = prompt("Informe sua idade:"); //recupera informação do usuário

if(idade >= 18) {
	alert("Maior de idade");
}else {
	alert("Menor de idade");
}

//laços de repetição
var count = 0;
while(count <= 5) {
	console.log(count);
	count++;
}

var c;
for(c=0; c <= 5; c++) {
	alert(c);
}

//Datas
var d = new Date();
alert(d.getDay());


//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);
console.log(lista);
console.log(lista[1]);
console.log(lista.length); // tamanho da lista
console.log(lista.reverse()); // imprime a lista ao contrário
console.log(lista.toString()); // imprime como String
console.log(lista.join(" - ")); // traz como String mas tem como definir um separador
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
console.log(frutas);
console.log(frutas[1].nome);