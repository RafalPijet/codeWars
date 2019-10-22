/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

 */

const scramble = (str1, str2) => {
    let targetLetters = '';
    let counter = 0;

    if (str1 !== null && str2 !== null) {
        for (let i = 0; i < str2.length; i++) {

            if (str1.includes(str2[i]) && !targetLetters.includes(str2[i])) {
                targetLetters += str2[i];
            }
        }
        for (let i = 0; i < str2.length; i++) {
            targetLetters.includes(str2[i]) ? counter++ : counter;
        }
        return str2.length === counter;
    } else {
        return false;
    }
};

console.log(scramble("aabbcamaomsccdd", "commas"));
