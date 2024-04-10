let atividades = [];

while (true) {
    let tipoAtividade = prompt("Digite o tipo de atividade (por exemplo, corrida, ciclismo, natação) ou 'sair' para encerrar:");
    if (tipoAtividade === "sair") {
        break;
    }

    let duracao = parseFloat(prompt("Digite a duração da atividade em minutos:"));
    atividades.push({tipo: tipoAtividade, duracao: duracao});
}

let totalDuracao = 0;
for (let i = 0; i < atividades.length; i++) {
    totalDuracao += atividades[i].duracao;
}

let mediaDuracao = totalDuracao / atividades.length;

alert("O tempo total gasto em atividades físicas foi " + totalDuracao.toFixed(2) + " minutos.");
alert("O tempo médio por atividade foi " + mediaDuracao.toFixed(2) + " minutos.");
