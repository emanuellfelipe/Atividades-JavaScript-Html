function simuladorVotacao() {
    let candidatos = ["Candidato 1", "Candidato 2", "Candidato 3"];
    let votos = [0, 0, 0];

    while (true) {
        let voto = prompt("Digite o número do candidato (1 para Candidato 1, 2 para Candidato 2, 3 para Candidato 3) ou 'sair' para encerrar a votação:");
        if (voto === "sair") {
            break;
        }

        let numeroCandidato = parseInt(voto);
        if (numeroCandidato >= 1 && numeroCandidato <= 3) {
            votos[numeroCandidato - 1]++;
        } else {
            alert("Número de candidato inválido. Por favor, digite 1, 2 ou 3.");
        }
    }

    let maxVotos = Math.max.apply(null, votos);
    let vencedores = [];
    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === maxVotos) {
            vencedores.push(candidatos[i]);
        }
    }

    if (vencedores.length === 1) {
        alert("O vencedor é " + vencedores[0] + " com " + maxVotos + " votos.");
    } else {
        alert("Houve um empate entre os seguintes candidatos: " + vencedores.join(", ") + ". Cada um recebeu " + maxVotos + " votos.");
    }
}

simuladorVotacao();
