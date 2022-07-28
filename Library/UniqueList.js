const { List } = require('./List.js');

class UniqueList extends List {
    constructor(arr = []) {
        if (!Array.isArray(arr)) arr = [arr];

        if (!arr.every(e => typeof e === 'number' && !Number.isNaN(e))) throw new TypeError("UniqueList only handles numbers.");

        super(arr);

        this.removeDuplicates();
    }

    // Override
    push(v) {
        if (typeof v !== 'number' || Number.isNaN(v)) throw new TypeError("UniqueList only handles numbers.");

        if (~super.linearSearchSentinel(v)) return null; // v already exists within the list
        else return super.push(v);
    }

    // Public
    removeDuplicates() {
        let map = {};

        for (let i = 0; i < this.length; ++i) {
            map[this[i]] = -~map[this[i]];

            if (map[this[i]] > 1) {
                super.splice(i--, 1);
            }
        }
    }

    pushUnique(v) {
        if (typeof v !== 'number' || Number.isNaN(v)) throw new TypeError("UniqueList only handles numbers.");

        if (~super.linearSearchSentinel(v)) return false; // v already exists within the list

        super.push(v);
        return true;
    }
}

exports.UniqueList = UniqueList;