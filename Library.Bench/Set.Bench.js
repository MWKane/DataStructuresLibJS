const bench = require('nanobench');
const { newArray, newUniqueArray } = require('../Helpers/Array.Helper.js');

bench('Set(1e1 Unique) x100,000', function (b) {
    let arr = newUniqueArray(1e1);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        new Set(arr);
    }

    b.end();
});

bench('Set(1e4 Unique) x100,000', function (b) {
    let arr = newUniqueArray(1e4);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        new Set(arr);
    }

    b.end();
});

bench('Set(1e1 Duplicates) x100,000', function (b) {
    let arr = newArray(1e1);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        new Set(arr);
    }

    b.end();
});

bench('Set(1e4 Duplicates) x100,000', function (b) {
    let arr = newArray(1e4);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        new Set(arr);
    }

    b.end();
});