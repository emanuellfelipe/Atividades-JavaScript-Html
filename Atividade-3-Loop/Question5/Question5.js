function gerarCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10);
    }
    return cpf;
}

function calcularDigitoVerificador(cpf, posicoes) {
    let soma = 0;
    for (let i = 0; i < cpf.length; i++) {
        soma += cpf[i] * posicoes--;
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function formatarCPF(cpf) {
    return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9);
}

let cpf = gerarCPF();
cpf += calcularDigitoVerificador(cpf, 10);
cpf += calcularDigitoVerificador(cpf, 11);

alert("CPF sem formatação: " + cpf);
alert("CPF formatado: " + formatarCPF(cpf));
