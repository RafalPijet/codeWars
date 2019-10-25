/* My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
Don't modify the input
For C: The result is freed.

 */

const  orderWeight = string => {
    let items = string.split(' ').sort();
    let result = [];
    items.forEach(item => {
        let pos = {};
        let sum = 0;
        for (let i = 0; i < item.length; i++) {
            sum += parseInt(item[i]);
        }
        pos.value = sum;
        pos.item = item;
        result = [...result, pos]
    });
    const compare = (a, b) => {
        let comparison = 0;

        if (a.value > b.value) {
            comparison = 1
        } else if (a.value < b.value) {
            comparison = -1
        }
        return comparison;
    };
    const compareTest = (a, b) => {
        let comparison = 0;

        if (a.item > b.item) {
            comparison = 1
        } else if (a.item < b.item) {
            comparison = -1
        }
        return comparison;
    };
    let sortedResult = result.sort(compare);
    let values = new Set(sortedResult.map(item => item.value));
    result = [];
    for (let value of values) {
        let tempItems = sortedResult.filter(item => item.value === value);
        tempItems.sort(compareTest).forEach(item => {
            result = [...result, item]
        })
    }
    return result.map(item => item.item).join(" ");
};

console.log(orderWeight("2 4 6 6 7 27 9 91 425 200 72 18 31064 7920 67407 96488 7 34608557 4 1 71899703 81"));
