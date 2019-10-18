/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Test.describe("Rot13", function(){
  Test.it("test", function(){
    Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
  })
  Test.it("Test", function(){
    Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))
  })
})
 */


const rot13 = message => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"];
    const maxIndex = 25;
    let arrayMessage = message.split("");
    let result = arrayMessage.map(letter => {

        if (alphabet.includes(letter.toLowerCase())) {
            let index = alphabet.indexOf(letter.toLowerCase());
            index = index + 13;

            if (index > maxIndex) {
                index = index - maxIndex - 1;
            }
            return (letter === letter.toUpperCase()) ? alphabet[index].toUpperCase() : alphabet[index];
        } else {
            return letter;
        }
    });
    return result.join("");
};

console.log(rot13("Imagine% Dragons$"));
