/* Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

 */

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
