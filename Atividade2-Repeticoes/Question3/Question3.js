let numerosImpares = "";

for (let i = 100; i <= 200; i++) {
    if (i % 2 !== 0) {
        numerosImpares += i + " ";
    }
}

alert("Números ímpares entre 100 e 200:\n" + numerosImpares);
