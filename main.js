const number = 100;
const direção = "c";

if(direção === "c"){
  for(let i = 0; i < number; i++){
    console.log(i);
  }
} else if(direção === "d"){
  for(let i = number; i > 0; i--){
    console.log(i);
  }
} else {
  console.log("Opção inválida");
}

switch(true){
  case number < 5:
    console.log("Contagem pequena")
    break
  case number >= 5 && number < 10:
    console.log("Contagem média")
    break
  case number >= 10:
    console.log("Contagem grande")
    break
}

