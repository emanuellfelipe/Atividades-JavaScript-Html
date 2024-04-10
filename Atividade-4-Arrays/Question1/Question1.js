let filmes = [];

while (true) {
    let nomeFilme = prompt("Digite o nome do filme ou 'sair' para encerrar:");
    if (nomeFilme === "sair") {
        break;
    }

    let notaFilme = parseInt(prompt("Digite uma nota de 1 a 5 para o filme:"));
    filmes.push({nome: nomeFilme, nota: notaFilme});
}

filmes.sort(function(a, b) {
    return b.nota - a.nota;
});

alert("Filmes avaliados:");
for (let i = 0; i < filmes.length; i++) {
    alert(filmes[i].nome + ": " + filmes[i].nota);
}
