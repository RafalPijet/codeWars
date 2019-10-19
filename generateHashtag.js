/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

 */

const generateHashtag = str => {
    let result = false;

    if (str.length && str.trim().length > 0) {
        let items = str.trim().split(" ");
        result = items.map(item => {
            let newItem = '';
            for (let i = 0; i < item.length; i++) {
                i === 0 ? newItem = item[i].toUpperCase() : newItem += item[i]
            }
            return newItem;
        });
        result = `#${result.join("")}`;
        result.length > 140 ? result = false : result
    }
    return result
};

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
