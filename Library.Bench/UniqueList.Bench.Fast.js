const bench = require('nanobench');
const { newArray, newUniqueArray } = require('../Helpers/Array.Helper.js');
const { UniqueList } = require('../Library/UniqueList.js');

bench('UniqueList(1e1 Unique) x100,000', function (b) {
    let arr = newUniqueArray(1e1);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        new UniqueList(arr);
    }

    b.end();
});

bench('UniqueList(1e1 Duplicates) x100,000', function (b) {
    let arr = newArray(1e1);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        new UniqueList(arr);
    }

    b.end();
});