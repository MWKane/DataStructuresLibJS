/**
 * Performs a shallow comparison of arrays, of which the order is significant.
 * 
 * @param {any[]} a
 * @param {any[]} b
 * 
 * @return {boolean} Whether a and b are equal.
 */
function areArraysEqual(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (!a || !b) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

/**
 * Creates a new array of the given length. 
 * Returned array is unsorted and contains duplicates.
 * 
 * @param {number} length
 * 
 * @return {number[]} Generated array.
 */
function newArray(length = 10) {
    let array = [];

    for (let i = 0; i < length; ++i) {
        array.push(Math.floor(Math.random() * length));
    }

    return array;
}

/**
 * Creates a new array of the given length.
 * Returned array is unsorted but does not contain duplicates.
 * 
 * @param {number} length
 * 
 * @return {number[]} Generated array.
 */
function newUniqueArray(length) {
    let array = [];

    for (let i = length; i >= 0; --i) {
        array.push(i*2);
    }

    return array;
}

exports.areArraysEqual = areArraysEqual;
exports.newArray = newArray;
exports.newUniqueArray = newUniqueArray;