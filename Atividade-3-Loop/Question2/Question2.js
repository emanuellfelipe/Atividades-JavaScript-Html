function converterDecimalParaBinario() {
    let numeroDecimal = parseInt(prompt("Digite um número decimal:"));
    let numeroBinario = numeroDecimal.toString(2);
    alert("O número " + numeroDecimal + " em binário é " + numeroBinario + ".");
}

converterDecimalParaBinario();
