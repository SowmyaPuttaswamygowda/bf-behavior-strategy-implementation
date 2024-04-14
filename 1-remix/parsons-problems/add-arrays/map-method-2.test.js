/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/607972557b9a3d0001e17286 */

const addArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) throw 'Error';
    return arr1.map((v, i) => arr1[i] + arr2[i]);
};

describe('addArrays', () => {
    it('should add two arrays element-wise', () => {
        const a1 = [1, 2, 3];
        const a2 = [4, 5, 6];
        const result = addArrays(a1, a2);
        expect(result).toEqual([5, 7, 9]);
    });
    it('should throw an error if arrays have different lengths', () => {
        const a1 = [1, 2, 3];
        const a2 = [4, 5];
        expect(() => {
        addArrays(a1, a2);
        }).toThrow();
    });
});