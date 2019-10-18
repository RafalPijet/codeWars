/*Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

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
