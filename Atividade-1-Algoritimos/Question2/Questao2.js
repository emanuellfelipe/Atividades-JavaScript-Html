function gerarFibonacci() {
  var n = prompt("Insira o valor de N:");
  
  var fibonacci = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  
  alert("Sequência de Fibonacci: " + fibonacci.join(", "));
  console.log("Sequência de Fibonacci: " + fibonacci.join(", "));
}
