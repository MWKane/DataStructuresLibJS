/**
 * @typedef {object} List
 */

function defaultCompareFunc(a, b) {
    return (
        (a === b)
        || (Number.isNaN(a) && Number.isNaN(b))
    );
}

class List extends Array {
    /**
     * @param {any[]} [arr = []] Array to convert to a List.
     * @param {function(any, any)} [compareFn = {a === b}]
     * 
     * @return {List}
     */
    constructor(arr = [], compareFn = defaultCompareFunc) {
        if (!Array.isArray(arr)) arr = [arr];

        let nanEdgeCase = false;
        if (arr.length === 1 && String(arr[0]) === 'NaN') {
            arr.push(undefined);
            nanEdgeCase = true;
        }

        super(...arr);

        if (nanEdgeCase) this.pop();

        this.compare = compareFn;
    }

    /**
     * Performs a linear search over the List, finding the first index of t.
     * 
     * @param {any} t Target to search for.
     * 
     * @return {number} Index of t. Returns -1 if t isn't found.
     */
    linearSearch(t) {
        let n = this.length;

        for (let i = 0; i < n; i++) {
            if (this.compare(this[i], t)) return i;
        }

        return -1;
    }

    /**
     * Performs a linear search over the list, finding all indices of t.
     * 
     * @param {any} t
     * 
     * @return {number[]} Indices of t.
     */
    linearSearchAll(t) {
        let n = this.length;
        let indices = [];


        for (let i = 0; i < n; i++) {
            if (this.compare(this[i], t)) indices.push(i);
        }

        return indices;
    }

    /**
     * Performs a linear search over the List utilising a sentinel, finding the first index of t.
     * Slightly faster than linearSearch() over large Lists.
     * 
     * @param {any} t Target to search for.
     * 
     * @return {number} Index of t. Returns -1 if t isn't found.
     */
    linearSearchSentinel(t) {
        // Prevent infinite loops
        if (!this.compare(t, t)) throw new Error('Infinite loop detected.');

        let n = this.length;
        let i = 0;

        // Add the sentinel
        super.push(t); // has an index of n

        while (!this.compare(this[i], t)) i++;

        // Remove the sentinel
        super.pop();

        if (i === n) return -1; // Found sentinel
        else return i; // Found t
    }
}

exports.List = List;