const { List } = require('./List.js');

/**
 * @typedef {object} UniqueList
 */

class UniqueList extends List {
    /**
     * @param {any[]} [arr = []] Array to convert to a UniqueList. Duplicates are removed.
     * 
     * @return {UniqueList}
     */
    constructor(arr = []) {
        if (!Array.isArray(arr)) arr = [arr];
        if (!arr.every(e => typeof e === 'number' && !Number.isNaN(e))) throw new TypeError("UniqueList only handles numbers.");

        arr = [...new Set(arr)];

        super(arr);
    }

    // Override
    push(v) {
        if (typeof v !== 'number' || Number.isNaN(v)) throw new TypeError("UniqueList only handles numbers.");

        if (~super.linearSearchSentinel(v)) return null; // v already exists within the list
        else return super.push(v);
    }

    // Public

    /**
     * Removes all duplicates within the UniqueList.
     */
    removeDuplicates() {
        let map = {};

        for (let i = 0; i < this.length; ++i) {
            map[this[i]] = -~map[this[i]];

            if (map[this[i]] > 1) {
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
        if (typeof v !== 'number' || Number.isNaN(v)) throw new TypeError("UniqueList only handles numbers.");

        if (~super.linearSearchSentinel(v)) return false; // v already exists within the list

        super.push(v);
        return true;
    }
}

exports.UniqueList = UniqueList;