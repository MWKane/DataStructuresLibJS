const bench = require('nanobench');
const { newArray } = require('../Helpers/Array.Helper.js');
const { List } = require('../Library/List.js');

bench('List(1e1) x100,000', function (b) {
    let arr = newArray(1e1);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        new List(arr);
    }

    b.end();
});

bench('List(1e4) x100,000', function (b) {
    let arr = newArray(1e4);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        new List(arr);
    }

    b.end();
});

bench('List(1e1).linearSearch() x100,000', function (b) {
    let arr = newArray(1e1);

    let l = new List(arr);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        l.linearSearch(Math.floor(Math.random() * 1e1));
    }

    b.end();
});

bench('List(1e4).linearSearch() x100,000', function (b) {
    let arr = newArray(1e4);

    let l = new List(arr);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        l.linearSearch(Math.floor(Math.random() * 1e4));
    }

    b.end();
});

bench('List(1e1).linearSearchSentinel() x100,000', function (b) {
    let arr = newArray(1e1);

    let l = new List(arr);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        l.linearSearchSentinel(Math.floor(Math.random() * 1e1));
    }

    b.end();
});

bench('List(1e4).linearSearchSentinel() x100,000', function (b) {
    let arr = newArray(1e4);

    let l = new List(arr);

    b.start();

    for (let i = 0; i < 100000; ++i) {
        l.linearSearchSentinel(Math.floor(Math.random() * 1e4));
    }

    b.end();
});