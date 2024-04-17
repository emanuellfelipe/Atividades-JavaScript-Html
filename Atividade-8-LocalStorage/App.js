function cadastrarCliente() {
    let cliente = {
        nome: document.getElementById('nomeCliente').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        cpf: document.getElementById('cpf').value,
        origem: document.getElementById('origem').value,
        score: document.getElementById('score').value
    };
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    if (clientes.find(c => c.cpf === cliente.cpf)) {
        alert('Cliente já cadastrado!');
        return;
    }
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    alert('Cliente cadastrado com sucesso!');
}

function consultarCliente() {
    let nome = document.getElementById('consultaCliente').value;
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    let cliente = clientes.find(c => c.nome === nome);
    if (cliente) {
        document.getElementById('detalhesCliente').textContent = 'Nome: ' + cliente.nome + ', Data de nascimento: ' + cliente.dataNascimento + ', CPF: ' + cliente.cpf + ', Origem: ' + cliente.origem + ', Score: ' + cliente.score;
    } else {
        alert('Cliente não encontrado!');
    }
}

function cadastrarProduto() {
    let produto = {
        nome: document.getElementById('nomeProduto').value,
        valor: document.getElementById('valorProduto').value,
        categoria: document.getElementById('categoriaProduto').value
    };
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    if (produtos.find(p => p.nome === produto.nome)) {
        alert('Produto já cadastrado!');
        return;
    }
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    alert('Produto cadastrado com sucesso!');
}

function cadastrarVendedor() {
    let vendedor = {
        nome: document.getElementById('nomeVendedor').value,
        matricula: document.getElementById('matricula').value
    };
    let vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];
    if (vendedores.find(v => v.matricula === vendedor.matricula)) {
        alert('Vendedor já cadastrado!');
        return;
    }
    vendedores.push(vendedor);
    localStorage.setItem('vendedores', JSON.stringify(vendedores));
    alert('Vendedor cadastrado com sucesso!');
}

function consultarVendedor() {
    let matricula = document.getElementById('consultaVendedor').value;
    let vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];
    let vendedor = vendedores.find(v => v.matricula === matricula);
    if (vendedor) {
        document.getElementById('detalhesVendedor').textContent = 'Nome: ' + vendedor.nome + ', Matrícula: ' + vendedor.matricula;
    } else {
        alert('Vendedor não encontrado!');
    }
}
