/* Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

 */

const snail = array => {
    let result = [];
    let cutingArray = array;

    while (cutingArray.length > 1) {

        for (let i = 0; i < cutingArray[0].length; i++) {
            result = [...result, cutingArray[0][i]]
        }
        cutingArray.shift();

        for (let i = 0; i < cutingArray.length; i++) {
            result = [...result, cutingArray[i].pop()]
        }

        for (let i = cutingArray[cutingArray.length - 1].length - 1; i >= 0; i--) {
            result = [...result, cutingArray[cutingArray.length - 1][i]];
        }
        cutingArray.pop();

        for (let i = cutingArray.length - 1; i >= 0; i--) {
            result = [...result, cutingArray[i].shift()];

        }
    }

    if (cutingArray.length === 1) {
        cutingArray[0].forEach(number => {
            result = [...result, number]
        });
    }
    return result;
};

const array = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];
const array1 = [[1, 2, 3, 1],
                [4, 5, 6, 4],
                [7, 8, 9, 7],
                [7, 8, 9, 7]];
const array2 = [[1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
                [11, 12, 13, 14, 15],
                [16, 17, 18, 19, 20],
                [21, 22, 23, 24, 25]];
const array3 = [[1, 2, 3, 4, 5, 6],
                [20, 21, 22, 23, 24, 7],
                [19, 32, 33, 34, 25, 8],
                [18, 31, 36, 35, 26, 9],
                [17, 30, 29, 28, 27, 10],
                [16, 15, 14, 13, 12, 11]];

console.log(snail([[1]]));
