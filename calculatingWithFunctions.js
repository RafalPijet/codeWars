/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:

 */

const makeNum = (num, func) => {
    return func === undefined ? num : func(num)
};

const zero = func => makeNum(0, func);
const one = func => makeNum(1, func);
const two = func => makeNum(2, func);
const three = func => makeNum(3, func);
const four = func => makeNum(4, func);
const five = func => makeNum(5, func);
const six = func => makeNum(6, func);
const seven = func => makeNum(7, func);
const eight = func => makeNum(8, func);
const nine = func => makeNum(9, func);

const plus = right => left => left + right;
const minus = right => left => left - right;
const times = right => left => left * right;
const divideBy = right => left => Math.floor(left / right);

console.log(four(divideBy(eight())));
