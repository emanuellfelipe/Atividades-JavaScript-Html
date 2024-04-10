let temperaturas = [];

for (let i = 0; i < 7; i++) {
    let temperatura = parseFloat(prompt("Digite a temperatura máxima do dia " + (i + 1) + ":"));
    temperaturas.push(temperatura);
}

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

alert("A temperatura média da semana foi " + mediaTemperatura.toFixed(2) + "°C.");
alert("A maior temperatura registrada foi " + maxTemperatura.toFixed(2) + "°C.");
alert("A menor temperatura registrada foi " + minTemperatura.toFixed(2) + "°C.");
