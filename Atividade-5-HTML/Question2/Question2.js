let temperaturas = [];

function adicionarTemperatura() {
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    temperaturas.push(temperatura);

    let somaTemperaturas = 0;
    let maxTemperatura = -Infinity;
    let minTemperatura = Infinity;

    for (let i = 0; i < temperaturas.length; i++) {
        somaTemperaturas += temperaturas[i];
        if (temperaturas[i] > maxTemperatura) {
            maxTemperatura = temperaturas[i];
        }
        if (temperaturas[i] < minTemperatura) {
            minTemperatura = temperaturas[i];
        }
    }

    let mediaTemperatura = somaTemperaturas / temperaturas.length;

    let resumo = "A temperatura média da semana foi " + mediaTemperatura.toFixed(2) + "°C.<br>";
    resumo += "A maior temperatura registrada foi " + maxTemperatura.toFixed(2) + "°C.<br>";
    resumo += "A menor temperatura registrada foi " + minTemperatura.toFixed(2) + "°C.<br>";

    document.getElementById("resumo").innerHTML = resumo;
}
