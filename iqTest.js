//ES5
function iqTest(numbers) {

    var numbersTable = numbers.split(" ");
    var oddNumbers = [];
    var evenNumbers = [];

    for (var i = 0; i < numbersTable.length; i++) {
        var number = parseInt(numbersTable[i]);

        if (number % 2 === 0) {
            evenNumbers.push(i + 1)
        } else {
            oddNumbers.push(i + 1);
        }
    }

    if (evenNumbers.length > oddNumbers.length) {
        return oddNumbers[0]
    } else {
        return evenNumbers[0]
    }
}

console.log(iqTest("1 3 5 7 9 12"));
