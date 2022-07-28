class List extends Array {
    constructor(arr = []) {
        if (!Array.isArray(arr)) arr = [arr];

        super(...arr);
    }

    linearSearch(t) {
        let n = this.length;

        for (let i = 0; i < n; i++) {
            if (this[i] === t) return i;
        }

        return -1;
    }

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