/**
 * @typedef {object} List
 */

class List extends Array {
    /**
     * @param {any[]} [arr = []] Array to convert to a List.
     * 
     * @return {List}
     */
    constructor(arr = []) {
        if (!Array.isArray(arr)) arr = [arr];

        let nanEdgeCase = false;
        if (arr.length === 1 && String(arr[0]) === 'NaN') {
            arr.push(undefined);
            nanEdgeCase = true;
        }

        super(...arr);

        if (nanEdgeCase) this.pop();
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
            if (this[i] === t) return i;
        }

        return -1;
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
        // Because NaN === NaN always evaluates to false
        // We have to exit early or get stuck in the while loop
        if (Number.isNaN(t)) return -1;

        let n = this.length;
        let i = 0;

        // Add the sentinel
        super.push(t); // has an index of n

        while (this[i] !== t) i++;

        // Remove the sentinel
        super.pop();

        if (i === n) return -1; // Found sentinel
        else return i; // Found t
    }
}

exports.List = List;