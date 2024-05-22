document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    // Adicionando a verificação de campos vazios no evento input
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (input.value.trim() === '') {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });
    });

    form.addEventListener('submit', function(event) {
        var inputs = document.querySelectorAll('input');
        var allValid = true;

        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                allValid = false;
                input.classList.add('invalid');
            }
        });

        if (!allValid) {
            event.preventDefault();
        }
    });
    
    function togglePasswordVisibility() {
        const senhaInput = document.getElementById('senha');
        const eyeIcon = document.getElementById('eye-icon');

        if (senhaInput.type === 'password') {
            senhaInput.type = 'text';
            eyeIcon.src = 'C://Users//980235//Desktop//Atividades-QQTech-Aulas//Desafio-QQTech//public//images//eye-icon-green.png';

        } else {
            senhaInput.type = 'password';
            eyeIcon.src = 'C://Users//980235//Desktop//Atividades-QQTech-Aulas//Desafio-QQTech//public//images//eye-icon.png';
        }
    }

    var eyeButton = document.getElementById('senha-botao');
    eyeButton.addEventListener('click', togglePasswordVisibility);
});
