// Seleciona o formulário
var form = document.querySelector('form');

// Adiciona um ouvinte de evento ao formulário
form.addEventListener('submit', function(event) {
    // Seleciona todos os campos de entrada
    var inputs = document.querySelectorAll('input');

    // Verifica cada campo de entrada
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') { // Se o campo de entrada estiver vazio
            event.preventDefault(); // Impede que o formulário seja enviado
            inputs[i].classList.add('invalid'); // Adiciona a classe 'invalid'
        } else {
            inputs[i].classList.remove('invalid'); // Remove a classe 'invalid'
        }
    }
});
