function balikKata(kata) {
    length = kata.length;

    var balikan = '';

    for (i = length; i >= 0; i--) {
        balikan += kata.charAt(i);
    }

    return balikan;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS