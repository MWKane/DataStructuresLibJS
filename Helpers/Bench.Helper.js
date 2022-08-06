const cp = require('child_process');
const path = require('path');

const parse = require('nanobench/parse');

/**
 * Compares two benchmarks of the format created by nanobench/parse.
 * 
 * @param {object} a First benchmark to compare.
 * @param {string} a.name
 * @param {string[]} a.output
 * @param {string} a.error
 * @param {{seconds: number, nanoseconds: number}[]} a.time
 * 
 * @param {object} b Second benchmark to compare.
 * @param {string} b.name
 * @param {string[]} b.output
 * @param {string} b.error
 * @param {{seconds: number, nanoseconds: number}[]} b.time
 * 
 * @return {number} -1: a < b, 0: a = b, 1: a > b.
 */
function compareBench(a, b) {
    let grace = 0.05;
    let upper = 1 + grace;
    let lower = 1 - grace;

    let timeA = parseTime(a.time);
    let timeB = parseTime(b.time);

    let ratio = timeA / timeB;
    if (ratio > upper) return 1;
    if (ratio < lower) return -1;
    return 0;
}

/**
 * Parses a benchmark time property into seconds.
 * 
 * @param {{seconds: number, nanoseconds: number}[]} time
 * 
 * @return {number} Float seconds.
 */
function parseTime(time) {
    let [s, ms] = time;
    ms /= 1e9;

    return s + ms;
}

/**
 * Executes a benchmark file and returns the parsed results.
 * @async
 * 
 * @param {string} file Relative file path from cwd.
 */
async function runBench(file) {
    // Start the child process
    try {
        let filePath = path.join(process.cwd(), file);
        let data = cp.execSync(`node "${filePath}"`);
        let output = parse(data);

        return Promise.resolve(output);
    } catch (err) {
        return Promise.reject(err);
    }
}

exports.compareBench = compareBench;
exports.parseTime = parseTime;
exports.runBench = runBench;