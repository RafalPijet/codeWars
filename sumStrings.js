/* Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

 */

const sumStrings = (a, b) => {
    let check = false;

    if (a !== null && b !== null && a !== undefined && b !== undefined) {

        if (a.length && b.length) {
            for (let i = 0; i < a.length; i++) {
                !Number.isFinite(parseInt(a[i])) ? check = true : []
            }
            for (let i = 0; i < b.length; i++) {
                !Number.isFinite(parseInt(b[i])) ? check = true : []
            }
        } else {
            return a.length ? a : b;
        }
    } else {
        check = true
    }
    return !check ? (parseInt(a) + parseInt(b)).toString() : null
};

console.log(sumStrings('712','8100'));
