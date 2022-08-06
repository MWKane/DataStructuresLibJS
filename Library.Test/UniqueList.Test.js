const { allTypes } = require('../Helpers/Test.Helper.js');
const { areArraysEqual, newArray } = require('../Helpers/Array.Helper.js');
const { UniqueList } = require('../Library/UniqueList.js');

describe('UniqueList() Test Suite', function () {

    test('Test 0 - Sanity Check', function () {
        expect(new UniqueList()).toBeDefined();
        expect(areArraysEqual(new UniqueList([1, 2, 3]), [1, 2, 3])).toBeTruthy();
    });

    test('Test 1 - Instantiation', function () {
        // Validate class instance
        expect(new UniqueList()).toBeDefined();
        expect(new UniqueList(allTypes)).toBeDefined();

        // Validate uniqueness
        expect(areArraysEqual(new UniqueList([1, 2, 3, 3, 4, 4, 5]), [1, 2, 3, 4, 5])).toBeTruthy();

        // Validate List() inheritance
        let l = new UniqueList();
        expect(l.linearSearch).toBeInstanceOf(Function)
        expect(l.linearSearchSentinel).toBeInstanceOf(Function);

        // Validate Array() inheritance
        expect(Array.isArray(l)).toBeTruthy();
        expect(l[0] = 3).toBe(3);
        expect(l.length).toBe(1);
        expect(l.indexOf(3)).toBe(0);
    });

    test('Test 2 - push()', function () {
        let l = new UniqueList([0, 2, 3]);

        expect(l.push).toBeInstanceOf(Function);

        // Validate push()
        expect(l.push(4)).toBe(4);
        expect(l.push(3)).toBeNull();

        allTypes.forEach(type => expect(l.push(type)).toBeDefined());
    });

    // Feature unimplemented
    test.todo('Test 3 - []');

    test('Test 4 - pushUnique()', function () {
        let l = new UniqueList([0, 2, 3]);

        expect(l.pushUnique).toBeInstanceOf(Function);

        expect(l.pushUnique(4)).toBeTruthy();
        expect(l.pushUnique(3)).toBeFalsy();

        allTypes.forEach(type => expect(l.push(type)).toBeTruthy());
    });

    test('Test 5 - removeDuplicates()', function () {
        let l = new UniqueList(allTypes);

        expect(l.removeDuplicates).toBeInstanceOf(Function);

        allTypes.forEach(type => {
            l.push(type);
            l.removeDuplicates();
            expect(l.length).toBe(allTypes.length);
        });
    });

});
