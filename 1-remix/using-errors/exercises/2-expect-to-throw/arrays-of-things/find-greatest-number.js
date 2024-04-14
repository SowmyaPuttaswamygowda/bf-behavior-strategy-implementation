// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *Finds the greatest number in an array of numbers.
 * @param {number[]} numbers- The array of numbers.
 * @returns {number} The gratest number in the array.
 * @throws {TypeError} If the input is not an array of numbers.
 */
export const findGreatestNumber = (numbers = []) => {
    if(!isArrayOfNumbers(numbers)) {
        throw new TypeError('numbers must be an array of numbers.');
    }
    if (numbers.length === 0) {
        return;
    }

    let GreatestNumber ;
    const sortedArr = numbers.sort();
    for(let i = 1;i < sortedArr.length; i++) {
        greatestNumber = Math.max(sortedArr[i - 1], sortedArr[i]); 
    }

    return greatestNumber;
};
