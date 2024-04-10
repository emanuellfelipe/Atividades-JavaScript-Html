let gastos = {};

while (true) {
    let tipoGasto = prompt("Digite o tipo de gasto (por exemplo, alimentação, transporte, lazer) ou 'sair' para encerrar:");
    if (tipoGasto === "sair") {
        break;
    }

    let valorGasto = parseFloat(prompt("Digite o valor do gasto:"));
    if (!gastos[tipoGasto]) {
        gastos[tipoGasto] = {total: 0, quantidade: 0};
    }
    gastos[tipoGasto].total += valorGasto;
    gastos[tipoGasto].quantidade++;
}

let totalGasto = 0;
for (let tipoGasto in gastos) {
    totalGasto += gastos[tipoGasto].total;
}

alert("Resumo financeiro:");
alert("Total gasto: R$" + totalGasto.toFixed(2));
for (let tipoGasto in gastos) {
    let mediaGasto = gastos[tipoGasto].total / gastos[tipoGasto].quantidade;
    alert("Gasto médio com " + tipoGasto + ": R$" + mediaGasto.toFixed(2));
}
