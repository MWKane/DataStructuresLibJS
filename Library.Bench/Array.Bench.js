const bench = require('nanobench');
const { newArray } = require('../Helpers/Array.Helper.js');

bench('Array(1e1) x100,000', function (b) {
    let arr = newArray(1e1);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        Array(...arr);
    }

    b.end();
});

bench('Array(1e4) x100,000', function (b) {
    let arr = newArray(1e4);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        Array(...arr);
    }

    b.end();
});

bench('Array(1e1).indexOf() x100,000', function (b) {
    let arr = newArray(1e1);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        arr.indexOf(Math.floor(Math.random() * 1e1));
    }

    b.end();
});

bench('Array(1e4).indexOf() x100,000', function (b) {
    let arr = newArray(1e4);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        arr.indexOf(Math.floor(Math.random() * 1e4));
    }

    b.end();
});