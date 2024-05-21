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
function togglePasswordVisibility() {
    const senhaInput = document.getElementById('senha');
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }

    // Verifica se a classe 'green' está presente
    const eyeIcon = document.querySelector('#senha-botao img');
    console.log('Classe green aplicada:', eyeIcon.classList.contains('green'));
}

// Seleciona o botão do olho
var eyeButton = document.getElementById('senha-botao');

// Seleciona o campo de senha
var senhaInput = document.getElementById('senha');

// Seleciona a imagem do ícone do olho
var eyeIcon = eyeButton.querySelector('img');

// Adiciona um ouvinte de evento ao botão do olho
eyeButton.addEventListener('click', togglePasswordVisibility);

