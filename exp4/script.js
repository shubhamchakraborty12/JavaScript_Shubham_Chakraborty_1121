// Function Type definition: a type that takes a string and returns a boolean
/**
 * @callback PalindromeChecker
 * @param {string} str
 * @returns {boolean}
 */

// Scope and Closure: 'history' and 'logCheck' are encapsulated
function createPalindromeTracker() {
  let history = 0; // Private variable trapped in the closure

  return function logCheck(inputString) {
    try {
      // Input Validation
      if (!inputString || typeof inputString !== 'string') {
        throw new Error("Input must be a valid non-empty string.");
      }

      // Format string (remove non-alphanumeric and lowercase)
      const cleanStr = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
      
      if (cleanStr === "") {
        throw new Error("Input contains no valid alphanumeric characters.");
      }

      // Reverse and compare
      const reversedStr = cleanStr.split('').reverse().join('');
      const isPalindrome = cleanStr === reversedStr;

      history++; // Modifying outer scope variable
      console.log(`Checks performed: ${history}`);

      return isPalindrome;

    } catch (error) {
      console.error(`Validation Error: ${error.message}`);
      return false;
    }
  };
}

// Instantiate the closure
const checkPalindrome = createPalindromeTracker();

// Test the application
console.log(checkPalindrome("A man, a plan, a canal: Panama")); // true
console.log(checkPalindrome("race car")); // true
console.log(checkPalindrome("hello world")); // false
console.log(checkPalindrome("")); // triggers catch, returns false
