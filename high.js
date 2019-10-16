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
