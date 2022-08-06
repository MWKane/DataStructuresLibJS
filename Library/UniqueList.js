const { List } = require('./List.js');

/**
 * @typedef {object} UniqueList
 */

class UniqueList extends List {
    /**
     * @param {any[]} [arr = []] Array to convert to a UniqueList. Duplicates are removed.
     * @param {function(any, any)} [compareFn = {a === b}]
     * 
     * @return {UniqueList}
     */
    constructor(arr = [], compareFn = undefined) {
        if (!Array.isArray(arr)) arr = [arr];

        arr = [...new Set(arr)];

        super(arr, compareFn);
    }

    // Override
    push(v) {
        if (~super.linearSearch(v)) return null; // v already exists within the list
        else return super.push(v);
    }

    // Public

    /**
     * Removes all duplicates within the UniqueList.
     */
    removeDuplicates() {
        for (let i = 0; i < this.length; ++i) {
            if (super.linearSearchAll(this[i]).length > 1) {
                super.splice(i--, 1);
            }
        }
    }

    /**
     * Pushes v into the UniqueList as long as it is unique.
     * 
     * @param {any} v The value to push.
     * 
     * @return {boolean} Whether the item was successfully pushed.
     */
    pushUnique(v) {
        if (~super.linearSearch(v)) return false; // v already exists within the list

        super.push(v);
        return true;
    }
}

exports.UniqueList = UniqueList;