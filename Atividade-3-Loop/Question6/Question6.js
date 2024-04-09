function verificarForcaDaSenha() {
    let senha = prompt("Digite sua senha:");
    let forca = 0;

    if (senha.length >= 8) {
        forca++;
    }

    if (/[A-Z]/.test(senha)) {
        forca++;
    }

    if (/[a-z]/.test(senha)) {
        forca++;
    }

    if (/[0-9]/.test(senha)) {
        forca++;
    }

    if (/[@#$%]/.test(senha)) {
        forca++;
    }

    switch(forca) {
        case 5:
            alert("Sua senha é Forte");
            break;
        case 4:
            alert("Sua senha é Média");
            break;
        default:
            alert("Sua senha é Fraca");
    }

    if (forca < 5) {
        alert("Para tornar sua senha forte, certifique-se de que ela tenha pelo menos 8 caracteres, inclua pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (por exemplo, @, #, $, %).");
    }
}

verificarForcaDaSenha();
