function pulaLinha() {
    document.write("<br>");
}

function mostra(conteudo) {
    document.write(conteudo);
    pulaLinha();
}

function calculaImc(altura, peso) {
    return Math.round(peso / (altura * altura));
}

var nome = prompt("Informe seu seu nome: ");
var altura = prompt(nome + ", informe sua altura: ");
var peso = prompt(nome + ", informe seu peso: ");
var imc = calculaImc(altura, peso);

mostra(nome + ", seu imc calculado é " + imc);

if(imc < 18.5) {
    mostra("Seu imc esta a baixo do normal.");
}
else if(imc > 35) {
    mostra("Seu imc esta a cima do normal.");
}
else {
    mostra("Seu imc esta normal.");
}
