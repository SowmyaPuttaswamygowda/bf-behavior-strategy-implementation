// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 * Finds the sum of all numbers in an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The sum of all numbers is not an array of numbers.
 * @throws {TypeError} If the numbers is not an array of numbers.
 */
export const sumNumbers = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('Input must be an array of numbers.');
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
};
