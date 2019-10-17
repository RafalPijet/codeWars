const toWeirdCase = text => {
    let result = '';
    let arrayText = text.split(" ");
    arrayText.forEach(item => {
        let arrayItem = item.split("").map((letter, i) => {

            if (i % 2 === 0) {
                return letter.toUpperCase()
            } else {
                return letter.toLowerCase()
            }
        });
        result += arrayItem.join("") + " ";
    });
    return result.substring(0, result.length - 1)
};

console.log(toWeirdCase("imagine dragons and depeche mode i"));
