let a = prompt("Insira o valor de a:");
let b = prompt("Insira o valor de b:");
let c = prompt("Insira o valor de c:");

let delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0) {
  alert("Não existem raízes reais para essa equação.");
  console.log("Não existem raízes reais para essa equação.");
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
  alert("As raízes da equação são: " + x1 + " e " + x2);
  console.log("As raízes da equação são: " + x1 + " e " + x2);
}
