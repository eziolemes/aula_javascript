function soma(n1, n2){
	return n1 + n2;
}
//alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
	var validar;
	if(idade >= 18) {
		validar = true;
	}else {
		validar = false;
	}
	return validar;
}

function clicou(){
	//alert("Obrigado por clicar");
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
	window.open("http://www.ciclocairu.com.br"); //abre uma nova aba
	window.location.href = "https://www.google.com"; // redireciona para o site na mesma aba
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"; // aqui aplica para um objeto específico
	elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";// aqui aplica para um objeto específico
	elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
	alert("Página carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}

//var idade = prompt("Informe sua idade:");
//console.log(validaIdade(idade));