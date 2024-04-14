/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 */


function addArrays(a1, a2) {
    if (a1.length !== a2.length) throw new Error();
    return a1.map((v, i) => v + a2[i]);
}

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