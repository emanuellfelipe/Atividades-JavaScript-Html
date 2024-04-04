function calcularExcessoEMulta() {

    let pesoPeixes = parseFloat(prompt("Digite o peso de peixes em (Kg):"));

    if (pesoPeixes >= 50) {
        let excesso = pesoPeixes - 50;
        let multa = excesso * 4;

        alert("Excesso de peso: " + excesso.toFixed(2) + " Kg");
        alert("Valor da multa: R$ " + multa.toFixed(2));
    } else {
        alert("Não houve excesso de peso.");
    }
}

calcularExcessoEMulta();
