/** product: calculate the product of an array of numbers.
 *  product([2, 3, 4]) ->  24
 */

function product(nums, i=0) {
  // base case
  if (i === nums.length) return 1
  // normal case
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWord=0) {
  // base case
  if (i === words.length) return longestWord
  // normal case
  longestWord = Math.max(longestWord, words[i].length)
  return longest(words, i+1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, everyOtherLetter='') {
  // base case
  if (i >= str.length) return everyOtherLetter
  // normal case
  everyOtherLetter += str[i]
  return everyOther(str, i+2, everyOtherLetter)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=str.length-1, reverse='') {
  // base case
  if (i < 0) return (reverse === str)
  // normal case
  reverse += str[i]
  return isPalindrome(str, i-1, reverse)

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  // base case
  if (i === arr.length) return  -1
  // normal case
  if (arr[i] === val) return i
  return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1, reverse='') {
  // base case
  if (i < 0) return reverse
  // normal case
  reverse += str[i]
  return revString(str, i-1, reverse)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = []
  for (let val of Object.values(obj)){
    if (typeof(val) === "string") result.push(val)
    if (typeof(val) === "object") result.push(...gatherStrings(val))
  }
  return result
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i=0) {
  // base case
  if (i === arr.length) return -1
  // normal case
  if (arr[i] === val) return i
  return binarySearch(arr, val, i+1)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
