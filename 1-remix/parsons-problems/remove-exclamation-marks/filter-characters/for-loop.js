/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

/* this exercise has 3 distractors */
/**
 *REmove exclamation marks from a given string. 
 * 
 * @param {string}s - The input string from which exclamation 
 * @returns {string} - The string without exclamation marks.
 */

function removeExclamationMarks(s) {
  var newString = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '!') {
      newString += s[i];
    }
  }
  return newString;
}

/* newString = s[i]; // distractor
return s; // distractor
if (s[i] == '!') { // distractor
*/
