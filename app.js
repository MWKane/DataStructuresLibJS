'use strict';

const { runBench, compareBench } = require('./Helpers/Bench.Helper.js');

const { List } = require('./Library/List.js');
const { UniqueList } = require('./Library/UniqueList.js');

// This area is mainly for testing things while developing

//(async function () {
//    console.log('started');

//    let data = await runBench('./Library.Bench/List.Bench.js')
//    let benchs = data.benchmarks;

//    console.log(benchs);
//    console.log(compareBench(benchs[3], benchs[5]));

//    console.log('\nfinished');
//})();


let l = new List([
    null,
    undefined,
    2,
    NaN,
    Infinity,
    BigInt(5),
    'abc',
    false,
    { key: 8 },
    [9],
    function ten() { return 10 }
], function (a, b) {
    return ((a?.key && b?.key) && (a?.key === b?.key));
});


console.log(l.linearSearchSentinel({}));