/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

 */

const incrementString = string => {
    let stringResult = '';
    let numberResult = '';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        (Number.isFinite(parseInt(string[i]))) ? numberResult += string[i] : stringResult += string[i];
    }
    numberResult.length ? count = parseInt(numberResult) + 1 : count = 1;
    return (numberResult.length - count.toString().length > 0) ?
        stringResult + "0".repeat(numberResult.length - count.toString().length) + count : stringResult + count
};

console.log(incrementString(""));
