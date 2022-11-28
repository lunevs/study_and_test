/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const myMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (myMap.has(s[i])) {
            console.log("find double")
        } else {
            myMap.set(s[i], i);
        }
    }
    console.log(myMap);
};



// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
console.log(lengthOfLongestSubstring("abcabcbb"));

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
console.log(lengthOfLongestSubstring("bbbbb"));

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
console.log(lengthOfLongestSubstring("pwwkew"));


// my input
console.log(lengthOfLongestSubstring("abcdafgebklmnopr"));

