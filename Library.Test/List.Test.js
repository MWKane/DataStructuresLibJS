const { areArraysEqual, newArray } = require('../Helpers/Array.Helper.js');
const { List } = require('../Library/List.js');

describe('List() Test Suite', function () {

    test('Test 0 - Sanity Check', function () {
        expect(new List()).toBeDefined();
        expect(areArraysEqual(new List([1, 2, 3]), [1, 2, 3])).toBeTruthy();
    });

    test('Test 1 - Instantiation', function () {        
        // Validate class instance
        let l = new List();
        expect(l).toBeInstanceOf(List);

        // Validate Array() inheritance
        expect(Array.isArray(l)).toBeTruthy();
        expect(l[0] = 3).toBe(3);
        expect(l.length).toBe(1);
        expect(l.indexOf(3)).toBe(0);
    });

    test('Test 2 - LinearSearch()', function () {
        let l = new List([1, 3, 2, 2, 4, 10]); // Duplicates and unordered

        expect(l.linearSearch).toBeInstanceOf(Function);

        // Validate index
        expect(l.linearSearch(3)).toBe(1);
        expect(l.linearSearch(2)).toBe(2); // Should be first occurrence
        expect(l.linearSearch(-4)).toBe(-1);

        // Validate truthy
        expect(~l.linearSearch(10)).toBeTruthy();
        expect(~l.linearSearch(1e5)).toBeFalsy();

        // Validate type handling
        l = new List([
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
        ]);

        expect(l.linearSearch(null)).toBe(0);
        expect(l.linearSearch()).toBe(1);
        expect(l.linearSearch(2)).toBe(2);
        expect(l.linearSearch(NaN)).toBe(3);
        expect(l.linearSearch(Infinity)).toBe(4);
        expect(l.linearSearch(BigInt(5))).toBe(5);
        expect(l.linearSearch('abc')).toBe(6);
        expect(l.linearSearch(false)).toBe(7);

        l.compare = function (a, b) {
            return ((a?.key && b?.key) && (a?.key === b?.key));
        }
        expect(l.linearSearch({ key: 8 })).toBe(8);
        expect(l.linearSearch({})).toBe(-1);

        l.compare = areArraysEqual;
        expect(l.linearSearch([9])).toBe(9);
        expect(l.linearSearch([])).toBe(-1);

        l.compare = function (a, b) {
            return (
                (typeof a === 'function' && typeof b === 'function')
                && (a.name === b.name)
            );
        }
        expect(l.linearSearch(function ten() { return 10 })).toBe(10);
        expect(l.linearSearch(function () { })).toBe(-1);
    });

    test('Test 3 - LinearSearchAll()', function () {
        let l = new List([1, 3, 2, 2, 4, 10]); // Duplicates and unordered

        expect(l.linearSearchAll).toBeInstanceOf(Function);

        // Validate all indices
        expect(l.linearSearchAll(3)).toEqual([1]);
        expect(l.linearSearchAll(2)).toEqual([2, 3]);
        expect(l.linearSearchAll(-4)).toEqual([]);

        // Validate type handling
        l = new List([
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
        ]);

        expect(l.linearSearchAll(null)).toEqual([0]);
        expect(l.linearSearchAll()).toEqual([1]);
        expect(l.linearSearchAll(2)).toEqual([2]);
        expect(l.linearSearchAll(NaN)).toEqual([3]);
        expect(l.linearSearchAll(Infinity)).toEqual([4]);
        expect(l.linearSearchAll(BigInt(5))).toEqual([5]);
        expect(l.linearSearchAll('abc')).toEqual([6]);
        expect(l.linearSearchAll(false)).toEqual([7]);

        l.compare = function (a, b) {
            return ((a?.key && b?.key) && (a?.key === b?.key));
        }
        expect(l.linearSearchAll({ key: 8 })).toEqual([8]);
        expect(l.linearSearchAll({})).toEqual([]);

        l.compare = areArraysEqual;
        expect(l.linearSearchAll([9])).toEqual([9]);
        expect(l.linearSearchAll([])).toEqual([]);

        l.compare = function (a, b) {
            return (
                (typeof a === 'function' && typeof b === 'function')
                && (a.name === b.name)
            );
        }
        expect(l.linearSearchAll(function ten() { return 10 })).toEqual([10]);
        expect(l.linearSearchAll(function () { })).toEqual([]);
    });

    test('Test 4 - LinearSearchSentinel()', function () {
        let l = new List([1, 3, 2, 2, 4, 10]); // Duplicates and unordered

        expect(l.linearSearchSentinel).toBeInstanceOf(Function);

        // Cache this value for later
        let length = l.length;

        // Validate index
        expect(l.linearSearch(3)).toBe(1);
        expect(l.linearSearchSentinel(2)).toBe(2); // Should be first occurrence
        expect(l.linearSearchSentinel(11)).toBe(-1);

        // Validate truthy
        expect(~l.linearSearchSentinel(10)).toBeTruthy(); // Check the last element to try and trick the sentinel
        expect(~l.linearSearchSentinel(11)).toBeFalsy();

        // Make sure sentinels haven't been left in
        expect(l.length).toBe(length);

        // Validate type handling
        l = new List([
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
        ]);

        expect(l.linearSearchSentinel(null)).toBe(0);
        expect(l.linearSearchSentinel()).toBe(1);
        expect(l.linearSearchSentinel(2)).toBe(2);
        expect(l.linearSearchSentinel(NaN)).toBe(3);
        expect(l.linearSearchSentinel(Infinity)).toBe(4);
        expect(l.linearSearchSentinel(BigInt(5))).toBe(5);
        expect(l.linearSearchSentinel('abc')).toBe(6);
        expect(l.linearSearchSentinel(false)).toBe(7);

        l.compare = function (a, b) {
            return ((a?.key && b?.key) && (a?.key === b?.key));
        }
        expect(l.linearSearchSentinel({ key: 8 })).toBe(8);
        expect(() => l.linearSearchSentinel({})).toThrow(Error);

        l.compare = areArraysEqual;
        expect(l.linearSearchSentinel([9])).toBe(9);
        expect(l.linearSearchSentinel([])).toBe(-1);

        l.compare = function (a, b) {
            return (
                (typeof a === 'function' && typeof b === 'function')
                && (a.name === b.name)
            );
        }
        expect(l.linearSearchSentinel(function ten() { return 10 })).toBe(10);
        expect(l.linearSearchSentinel(function () { })).toBe(-1);
    });
});
