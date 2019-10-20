/* Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

 */

const cakes = (recipe, available) => {
    let result = {};
    for (let keyR in recipe) {
        for (let keyA in available) {

            if (keyA === keyR) {
                let amount = Math.floor(available[keyA] / recipe[keyR]);
                result[keyA] = amount;
            }
        }
    }
    return (Object.keys(recipe).length === Object.keys(result).length) ? Math.min(...Object.values(result)) : 0;
};

const recipe1 = {flour: 500, sugar: 200, eggs: 1};
const recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
const available1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
const available2 = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakes(recipe2, available2));
