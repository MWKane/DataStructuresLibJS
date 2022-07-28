const { UniqueList } = require('../Library/UniqueList.js');

describe('UniqueList() Test Suite', function () {

    test('Test 1 - Instantiation', function () {
        // Validate enforced type
        expect(() => new UniqueList([false])).toThrow(TypeError);
        expect(() => new UniqueList(['abc'])).toThrow(TypeError);
        expect(() => new UniqueList([{}])).toThrow(TypeError);
        expect(() => new UniqueList([BigInt(4)])).toThrow(TypeError);
        expect(() => new UniqueList([NaN])).toThrow(TypeError);
        expect(() => new UniqueList([Symbol()])).toThrow(TypeError);
        expect(() => new UniqueList([function () { }])).toThrow(TypeError);

        // Validate uniqueness
        function areArraysEqual(a, b) {
            if (!a || !b) return false;
            if (a.length !== b.length) return false;

            for (let i = 0; i < a.length; ++i) {
                if (a[i] !== b[i]) return false;
            }

            return true;
        }
        expect(areArraysEqual(new UniqueList([1, 2, 3, 3, 4, 4, 5]), [1, 2, 3, 4, 5])).toBeTruthy();
        
        let l = new UniqueList();
        expect(l).toBeInstanceOf(UniqueList);

        // Validate List() inheritance
        expect(l.linearSearch).toBeInstanceOf(Function)
        expect(l.linearSearchSentinel).toBeInstanceOf(Function);

        // Validate Array() inheritance
        expect(Array.isArray(l)).toBeTruthy();
        expect(l[0] = 3).toBe(3);
        expect(l.length).toBe(1);
        expect(l.indexOf(3)).toBe(0);
    });

    test('Test 2 - push()', function () {
        let l = new UniqueList([1, 2, 3]);

        expect(l.push).toBeInstanceOf(Function);

        // Validate push()
        expect(l.push(4)).toBe(4);
        expect(l.push(3)).toBeNull();

        expect(() => l.push(false)).toThrow(TypeError);
        expect(() => l.push(null)).toThrow(TypeError);
        expect(() => l.push()).toThrow(TypeError);
        expect(() => l.push('abc')).toThrow(TypeError);
        expect(() => l.push([])).toThrow(TypeError);
        expect(() => l.push({})).toThrow(TypeError);
        expect(() => l.push(BigInt(4))).toThrow(TypeError);
        expect(() => l.push(NaN)).toThrow(TypeError);
        expect(() => l.push(Symbol())).toThrow(TypeError);
        expect(() => l.push(function () { })).toThrow(TypeError);
    });

    // Feature unimplemented
    test.skip('Test 3 - []', function () {
        let l = new UniqueList([1, 2, 3]);

        // Validate []
        expect(l[3] = 4).toBe(4);
        expect(l[4] = 3).toBeNull();

        console.log(l);

        expect(() => l[4] = false).toThrow(TypeError);
        expect(() => l[4] = null).toThrow(TypeError);
        expect(() => l[4] = undefined).toThrow(TypeError);
        expect(() => l[4] = 'abc').toThrow(TypeError);
        expect(() => l[4] = []).toThrow(TypeError);
        expect(() => l[4] = {}).toThrow(TypeError);
        expect(() => l[4] = BigInt(4)).toThrow(TypeError);
        expect(() => l[4] = NaN).toThrow(TypeError);
        expect(() => l[4] = Symbol()).toThrow(TypeError);
        expect(() => l[4] = function () { }).toThrow(TypeError);
    });

    test('Test 4 - pushUnique()', function () {
        let l = new UniqueList([1, 2, 3]);

        expect(l.pushUnique).toBeInstanceOf(Function);

        expect(l.pushUnique(4)).toBeTruthy();
        expect(l.pushUnique(3)).toBeFalsy();

        expect(() => l.pushUnique(false)).toThrow(TypeError);
        expect(() => l.pushUnique(null)).toThrow(TypeError);
        expect(() => l.pushUnique()).toThrow(TypeError);
        expect(() => l.pushUnique('abc')).toThrow(TypeError);
        expect(() => l.pushUnique([])).toThrow(TypeError);
        expect(() => l.pushUnique({})).toThrow(TypeError);
        expect(() => l.pushUnique(BigInt(4))).toThrow(TypeError);
        expect(() => l.pushUnique(NaN)).toThrow(TypeError);
        expect(() => l.pushUnique(Symbol())).toThrow(TypeError);
        expect(() => l.pushUnique(function () { })).toThrow(TypeError);
    });

    test('Test 5 - removeDuplicates()', function () {
        let l = new UniqueList([1, 2, 3]);

        expect(l.removeDuplicates).toBeInstanceOf(Function);

        l.push(2, 2);
        l.removeDuplicates();
        expect(l.length).toBe(3);
    });

});
