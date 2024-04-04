function calcularSalario() {
    let codigo = parseInt(prompt("Digite o código de ID:"));
    let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas:"));

    let valorPorHora = 10.00;
    let valorHoraExcedente = 20.00;
    let limiteHoras = 50;

    let salarioTotal = 0;
    let salarioExcedente = 0;

    if (horasTrabalhadas <= limiteHoras) {
        salarioTotal = horasTrabalhadas * valorPorHora;
    } else {
        let horasExcedentes = horasTrabalhadas - limiteHoras;
        salarioTotal = limiteHoras * valorPorHora;
        salarioExcedente = horasExcedentes * valorHoraExcedente;
    }

    alert("Salário total: R$ " + salarioTotal.toFixed(2));
    alert("Salário excedente: R$ " + salarioExcedente.toFixed(2));
}
calcularSalario();
