let votos = [0, 0, 0];

function adicionarVoto() {
    let numeroCandidato = parseInt(document.getElementById("numeroCandidato").value);
    if (numeroCandidato >= 1 && numeroCandidato <= 3) {
        votos[numeroCandidato - 1]++;
    } else {
        alert("Número de candidato inválido. Por favor, digite 1, 2 ou 3.");
    }
}

function exibirResultado() {
    let maxVotos = Math.max.apply(null, votos);
    let vencedores = [];
    for (let i = 0; i < votos.length; i++) {
        if (votos[i] === maxVotos) {
            vencedores.push("Candidato " + (i + 1));
        }
    }

    let resultado;
    if (vencedores.length === 1) {
        resultado = "O vencedor é " + vencedores[0] + " com " + maxVotos + " votos.";
    } else {
        resultado = "Houve um empate entre os seguintes candidatos: " + vencedores.join(", ") + ". Cada um recebeu " + maxVotos + " votos.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
