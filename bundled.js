class List extends Array {
    constructor() {
        super();
    }

    linearSearch(t) {
        let n = this.length;

        for (let i = 0; i <= n; i++) {
            if (this[i] === t) return i;
        }

        return -1;
    }

    linearSearchSentinel(t) {
        let n = this.length;
        let i = 0;

        // Add the sentinel
        this.push(t); // has an index of n

        while (this[i] !== t) i++;

        // Remove the sentinel
        this.pop();

        if (i === n) return -1; // Found sentinel
        else return i; // Found t
    }
}