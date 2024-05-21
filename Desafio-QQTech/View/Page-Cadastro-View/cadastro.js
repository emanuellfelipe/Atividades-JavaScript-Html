document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        var inputs = document.querySelectorAll('input');
        var allValid = true;

        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                allValid = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
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
            eyeIcon.src = 'C:\Users/980235\Desktop\Atividades-QQTech-Aulas\Desafio-QQTech\View\Icones-Imagens-View\eye-icon-green.png';
        } else {
            senhaInput.type = 'password';
            eyeIcon.src = 'C:\Users/980235\Desktop\Atividades-QQTech-Aulas\Desafio-QQTech\View\Icones-Imagens-View\eye-icon-green.png';
        }
    }

    var eyeButton = document.getElementById('senha-botao');
    eyeButton.addEventListener('click', togglePasswordVisibility);
});
