/*For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

describe("Solution", function(){
  it("EncryptExampleTests", function(){
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});
 */


//ES5
function encrypt(text, n) {
    var result = text;

    if (result !== '' && result !== null) {
        while (n > 0) {
            var firstPart = '';
            var secondPart = '';

            for (var i = 0; i < result.length; i += 2) {
                (result.length - i > 1) ? firstPart += result[i + 1] : '';
                secondPart += result[i];
            }
            result = firstPart + secondPart;
            n -= 1;
        }
    }
    return result;
}

function descrypt(encryptedText, n) {
    var result = encryptedText;

    if (result !== '' && result !== null) {
        while (n > 0) {
            var firstPart = result.substring(0, result.length / 2);
            var secondPart = result.substring(Math.floor(result.length / 2), result.length);
            result = '';

            for (var i = 0; i < secondPart.length; i++) {

                if (i < firstPart.length) {
                    result += secondPart[i] + firstPart[i];
                } else {
                    result += secondPart[i]
                }
            }
            n -= 1;
        }
    }
    return result;
}

var first = encrypt(null, 4);
console.log(first);
console.log(descrypt(first, 4));
