const { List } = require('../Library/List.js');

describe('List() Test Suite', function () {

    test('Test 1 - Instantiation', function () {
        let l = new List();
        expect(l.constructor.name).toBe('List');

        // Validate Array() inheritance
        expect(Array.isArray(l)).toBeTruthy();
        expect(l[0] = 3).toBe(3);
        expect(l.length).toBe(1);
        expect(l.indexOf(3)).toBe(0);
    });

    test('Test 2 - LinearSearch()', function () {
        let l = new List([1, 3, 2, 2, 4, 10]); // Duplicates and unordered

        expect(typeof l.linearSearch).toBe('function');

        // Validate index
        expect(l.linearSearch(3)).toBe(1);
        expect(l.linearSearch(2)).toBe(2); // Should be first occurrence
        expect(l.linearSearch(-4)).toBe(-1);

        // Validate truthy
        expect(~l.linearSearch(10)).toBeTruthy();
        expect(~l.linearSearch(1e5)).toBeFalsy();

        // Error handling
        expect(l.linearSearch(false)).toBe(-1);
        expect(l.linearSearch(null)).toBe(-1);
        expect(l.linearSearch()).toBe(-1);
        expect(l.linearSearch('abc')).toBe(-1);
        expect(l.linearSearch([])).toBe(-1);
        expect(l.linearSearch({})).toBe(-1);
        expect(l.linearSearch(BigInt(4))).toBe(-1);
        expect(l.linearSearch(NaN)).toBe(-1);
        expect(l.linearSearch(Symbol())).toBe(-1);
        expect(l.linearSearch(function () { })).toBe(-1);
    });

    test('Test 3 - LinearSearchSentinel()', function () {
        let l = new List([1, 3, 2, 2, 4, 10]); // Duplicates and unordered

        expect(typeof l.linearSearchSentinel).toBe('function');

        // Cache this value for later
        let length = l.length;

        // Validate index
        expect(l.linearSearch(3)).toBe(1);
        expect(l.linearSearchSentinel(2)).toBe(2); // Should be first occurrence
        expect(l.linearSearchSentinel(11)).toBe(-1);

        // Validate truthy
        expect(~l.linearSearchSentinel(10)).toBeTruthy(); // Check the last element to try and trick the sentinel
        expect(~l.linearSearchSentinel(11)).toBeFalsy();

        // Error handling
        expect(l.linearSearchSentinel(false)).toBe(-1);
        expect(l.linearSearchSentinel(null)).toBe(-1);
        expect(l.linearSearchSentinel()).toBe(-1);
        expect(l.linearSearchSentinel('abc')).toBe(-1);
        expect(l.linearSearchSentinel([])).toBe(-1);
        expect(l.linearSearchSentinel({})).toBe(-1);
        expect(l.linearSearchSentinel(BigInt(4))).toBe(-1);
        expect(l.linearSearchSentinel(NaN)).toBe(-1);
        expect(l.linearSearchSentinel(Symbol())).toBe(-1);
        expect(l.linearSearchSentinel(function () { })).toBe(-1);

        // Make sure sentinels haven't been left in
        expect(l.length).toBe(length);
    });
});
