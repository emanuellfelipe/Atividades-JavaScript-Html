let gastos = {};

function adicionarGasto() {
    let tipoGasto = document.getElementById("tipoGasto").value;
    let valorGasto = parseFloat(document.getElementById("valorGasto").value);
    if (!gastos[tipoGasto]) {
        gastos[tipoGasto] = {total: 0, quantidade: 0};
    }
    gastos[tipoGasto].total += valorGasto;
    gastos[tipoGasto].quantidade++;

    let totalGasto = 0;
    for (let tipoGasto in gastos) {
        totalGasto += gastos[tipoGasto].total;
    }

    let resumo = "Total gasto: R$" + totalGasto.toFixed(2) + "<br>";
    for (let tipoGasto in gastos) {
        let mediaGasto = gastos[tipoGasto].total / gastos[tipoGasto].quantidade;
        resumo += "Gasto médio com " + tipoGasto + ": R$" + mediaGasto.toFixed(2) + "<br>";
    }

    document.getElementById("resumo").innerHTML = resumo;
}
