//ES5
// function iqTest(numbers) {
//
//     var numbersTable = numbers.split(" ");
//     var oddNumbers = [];
//     var evenNumbers = [];
//
//     for (var i = 0; i < numbersTable.length; i++) {
//         var number = parseInt(numbersTable[i]);
//
//         if (number % 2 === 0) {
//             evenNumbers.push(i + 1)
//         } else {
//             oddNumbers.push(i + 1);
//         }
//     }
//
//     if (evenNumbers.length > oddNumbers.length) {
//         return oddNumbers[0]
//     } else {
//         return evenNumbers[0]
//     }
// }

//ES6
const iqTest = numbers => {
    const numbersTable = numbers.split(" ").map(number => parseInt(number));
    let odd = numbersTable.filter(number => (number % 2 !== 0));
    let even = numbersTable.filter(number => (number % 2 === 0));
    return even.length < odd.length ? numbersTable.indexOf(even[0]) + 1 : numbersTable.indexOf(odd[0]) + 1
};

console.log(iqTest("2 4 5 6 8 12"));
