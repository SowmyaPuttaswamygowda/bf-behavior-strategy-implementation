import { addArrays } from './push-to-new-array.js'

describe('addArrays function', function() {
    it('should return the sum of corresponding elements from two arrays of equal length', function() {
        // Test case 1: Arrays of equal length
        expect(addArrays([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
        // Test case 2: Arrays with negative numbers
        expect(addArrays([-1, -2, -3], [-4, -5, -6])).toEqual([-5, -7, -9]);
        // Test case 3: Arrays with zeros
        expect(addArrays([0, 0, 0], [0, 0, 0])).toEqual([0, 0, 0]);
    });

    it('should throw an error if input arrays have different lengths', function() {
        // Test case 4: Arrays of different lengths
        expect(() => { addArrays([1, 2], [3, 4, 5]) }).toThrow(Error);
    });
});