/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Test.describe("Example tests",_=>{
Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
Test.assertEquals(high('take me to semynak'), 'semynak');
});
 */


const high = text => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"];

    let data = text.toLowerCase().split(" ");
    let result = [];
    let highValue = 0;

    data.forEach(item => {
        let value = 0;

        for (let i = 0; i < item.length; i++) {
            value += (alphabet.indexOf(item[i]) + 1);
        }
        result = [...result, value];
        highValue = result.indexOf(Math.max(...result));
    });

    return data[highValue];
};

console.log(high('mAn i Need a up Taxi to ubud'));
