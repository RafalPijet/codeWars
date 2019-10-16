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
