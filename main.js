// index.js
const prompt = require("prompt-sync")({ sigint: true }); // necessário para Node.js

const number = Number(prompt("Digite um número para contar: "));
const direcao = prompt("Quer contar crescente ou decrescente? (c/d): ");

// Contagem
if(direcao === "c"){
  for(let i = 1; i <= number; i++){
    console.log(i);
  }
} else if(direcao === "d"){
  for(let i = number; i >= 1; i--){
    console.log(i);
  }
} else {
  console.log("Opção inválida");
}

// Classificação
switch(true){
  case number < 5:
    console.log("Contagem pequena");
    break;
  case number >= 5 && number < 10:
    console.log("Contagem média");
    break;
  default:
    console.log("Contagem grande");
}
