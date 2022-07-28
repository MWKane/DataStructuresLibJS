function areArraysEqual(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

function newArray(length = 10) {
    let array = [];

    for (let i = 0; i < length; ++i) {
        array.push(Math.floor(Math.random() * length));
    }

    return array;
}

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