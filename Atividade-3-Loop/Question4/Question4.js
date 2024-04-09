function calcularGorjeta() {
    var valorConta = parseFloat(prompt("Digite o valor total da conta:"));
    var avaliacaoServico;
    var percentualGorjeta;

    while (true) {
        avaliacaoServico = prompt("Como você avalia o serviço? (Excelente, Bom, Médio, Ruim)");

        switch(avaliacaoServico) {
            case "Excelente":
                percentualGorjeta = 0.20;
                break;
            case "Bom":
                percentualGorjeta = 0.15;
                break;
            case "Médio":
                percentualGorjeta = 0.10;
                break;
            case "Ruim":
                percentualGorjeta = 0.05;
                break;
            default:
                alert("Avaliação do serviço não reconhecida. Por favor, digite Excelente, Bom, Médio ou Ruim.");
                continue;
        }
        break;
    }

    var valorGorjeta = valorConta * percentualGorjeta;
    var valorTotal = valorConta + valorGorjeta;

    alert("O percentual da gorjeta com base na sua avaliação do serviço é " + (percentualGorjeta * 100) + "%.");
    alert("O valor da gorjeta é R$" + valorGorjeta.toFixed(2) + ".");
    alert("O valor total a ser pago, incluindo a gorjeta, é R$" + valorTotal.toFixed(2) + ".");
}

calcularGorjeta();
