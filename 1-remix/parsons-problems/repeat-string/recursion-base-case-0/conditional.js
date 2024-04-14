/* 2 extra lines */

/* parsons-collapse: recursion with base-case 0

  i'm using 0 as the base-case because that is the fewest possible repetitions
  zero repetitions is an empty string, so if repetitions is 0 it will return ''

  otherwise i'll need to combine the text with a string that has one fewer reptitions

  repeatString(text, repetitions) =>
    base-case: repetitions is 0
      return: an empty string
    recursive case: repetitions is greater than 0
      nextRepetitions = subtract one from repetitions
      recursedValue = recursively call repeatString with text and nextRepetitions
      return: text + recursedValue

*/
/**
 * 
 * @param {string} [text=''] - The string to be repeated.Defaults to an empty string if not provided.
 * @param {number} [repetitions=1] -The number of times the string should be repeated.Default to 1 if not provided.
 * @returns {string} The resultng string after repetition.
 */

const repeatString = (text = '', repetitions = 1) => {
  if (repetitions === 0) {
    return '';
  } else {
    const nextRepetitions = repetitions - 1;
    const oneRepetitionShort = repeatString(text, nextRepetitions);
    return text + oneRepetitionShort;
  }
};

/*return oneRepetitionShort + text; // distractor
if (repetitions !== 0) { // distractor
*/
descibe('repeatString', () => {
  test('hello,3 -> hellohellohello',() => {
    expect(repeatString('hello',3)).toEqual('hellohellohello');
  })
})