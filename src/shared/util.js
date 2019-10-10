/**
 * returns a random nunber
 * @public
 * @param {number} min the lowest possible value it can return
 * @param {number} max the highest possible value it can return
 * @return {number} a random number between min and max inclusively.
 */
random = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }

/** 
 * picks a random element from an array
 * @todo might need to fix the return type on the "returns"
 * @param {array} inputArray the array from which a random item is picked
 * @return {Object} the random element from the parameter array
 */
pickRandomArrayElement = inputArray => { return inputArray[random(0, inputArray.length - 1)]; }

/**
 * computes the distance between two points
 * @public
 * @todo test this function
 * @param {number} x1 x of the first pair
 * @param {number} y1 y of the first pair
 * @param {number} x2 x of the second pair
 * @param {number} y2 y of the second pair
 * @returns {number} the distance between the x,y pairs
 */
dist = (x1, y1, x2, y2) => { return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2))); }

/** Exports */
module.exports = {
    random: random,
    pickRandomArrayElement: pickRandomArrayElement,
    dist: dist
}