let produtos = [];

function adicionarProduto() {
    let nomeProduto = document.getElementById("nomeProduto").value;
    let categoriaProduto = document.getElementById("categoriaProduto").value;
    let valorProduto = parseFloat(document.getElementById("valorProduto").value);
    produtos.push({nome: nomeProduto, categoria: categoriaProduto, valor: valorProduto});
}

function consultarProdutos() {
    let consultacategoria = document.getElementById("consultacategoria").value;
    let produtosFiltrados = produtos.filter(produto => produto.categoria === consultacategoria);

    let listaProdutos = "";
    for (let produto of produtosFiltrados) {
        listaProdutos += "Nome: " + produto.nome + ", categoria: " + produto.categoria + ", Valor: R$" + produto.valor.toFixed(2) + "<br>";
    }

    document.getElementById("produtos").innerHTML = listaProdutos;
}
