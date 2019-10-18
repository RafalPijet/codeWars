const rot13 = message => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"];
    const maxIndex = 25;
    let arrayMessage = message.split("");
    let result = arrayMessage.map(letter => {

        if (alphabet.includes(letter.toLowerCase())) {
            let index = alphabet.indexOf(letter.toLowerCase());
            index = index + 13;

            if (index > maxIndex) {
                index = index - maxIndex - 1;
            }
            return (letter === letter.toUpperCase()) ? alphabet[index].toUpperCase() : alphabet[index];
        } else {
            return letter;
        }
    });
    return result.join("");
};

console.log(rot13("Imagine% Dragons$"));
