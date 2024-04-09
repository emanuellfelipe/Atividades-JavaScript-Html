function classificarProdutos() {
    while (true) {
        let totalProdutos = parseInt(prompt("Digite o número total de produtos que você deseja classificar:"));
        let produtos = [];

        for (let i = 0; i < totalProdutos; i++) {
            let preco = parseFloat(prompt("Insira o preço do produto " + (i + 1) + ":"));
            let categoria;

            if (preco > 1000) {
                categoria = 'A';
            } else if (preco > 500) {
                categoria = 'B';
            } else if (preco > 100) {
                categoria = 'C';
            } else if (preco > 50) {
                categoria = 'D';
            } else {
                categoria = 'E';
            }

            produtos.push({preco: preco, categoria: categoria});
            alert("O produto " + (i + 1) + " foi classificado na categoria " + categoria + " com o preço de R$" + preco.toFixed(2) + ".");
        }

        alert("Todos os preços e categorias dos produtos:");
        for (let i = 0; i < produtos.length; i++) {
            alert("Produto " + (i + 1) + ": Categoria " + produtos[i].categoria + ", Preço R$" + produtos[i].preco.toFixed(2));
        }

        let continuar = prompt("Deseja classificar mais produtos? (Sim/Não)");
        if (continuar.toLowerCase() !== "sim") {
            break;
        }
    }
}

classificarProdutos();
