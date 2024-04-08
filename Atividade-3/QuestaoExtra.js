// Taxas de conversão fixas para cada dia da semana
let taxas = {
    "Segunda": {"Dólar": 0.20, "Euro": 0.17},
    "Terça": {"Dólar": 0.21, "Euro": 0.18},
    "Quarta": {"Dólar": 0.22, "Euro": 0.19},
    "Quinta": {"Dólar": 0.23, "Euro": 0.20},
    "Sexta": {"Dólar": 0.24, "Euro": 0.21},
    "Sábado": {"Dólar": 0.25, "Euro": 0.22},
    "Domingo": {"Dólar": 0.19, "Euro": 0.16}
};

// Solicita ao usuário o valor em Real
let valorReal = prompt("Digite o valor em Real:");

// Solicita ao usuário o dia da semana
let diaDaSemana = prompt("Digite o dia da semana:");

// Converte o valor para cada moeda
for (let moeda in taxas[diaDaSemana]) {
    let valorConvertido = valorReal * taxas[diaDaSemana][moeda];
    alert("R$" + valorReal + " equivale a " + valorConvertido.toFixed(2) + " " + moeda + " na " + diaDaSemana + ".");
}
