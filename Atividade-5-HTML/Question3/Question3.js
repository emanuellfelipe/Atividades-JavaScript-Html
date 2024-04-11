let atividades = [];

function adicionarAtividade() {
    let tipoAtividade = document.getElementById("tipoAtividade").value;
    let duracaoAtividade = parseFloat(document.getElementById("duracaoAtividade").value);
    atividades.push({tipo: tipoAtividade, duracao: duracaoAtividade});

    let totalDuracao = 0;
    for (let i = 0; i < atividades.length; i++) {
        totalDuracao += atividades[i].duracao;
    }

    let mediaDuracao = totalDuracao / atividades.length;

    let resumo = "O tempo total gasto em atividades físicas foi " + totalDuracao.toFixed(2) + " minutos.<br>";
    resumo += "O tempo médio por atividade foi " + mediaDuracao.toFixed(2) + " minutos.<br>";

    document.getElementById("resumo").innerHTML = resumo;
}
