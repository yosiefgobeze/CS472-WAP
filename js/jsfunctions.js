/**
 * filename: javascriptfunctions.js
 * author: Yosief Brhane Gobeze
 * Id Number: 610825
 * 
 * Note: Here are solutions of W1D5 class exercises
 */

 /**
  * Q1: Define a function max() that takes two numbers as arguments and 
  *             returns the largest of them. Use the if-then-else construct available in Javascript
  */

  function max(x, y){
      if(x>y){
        return x;        
      } else{
       return y;         
      }     

  }
  console.log(max(20,25)); // Output: 25

  /**
   * Q2:  Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
   */

  function maxOfThree(x, y, z){
    if(x>y && x>z){
      return x;        
    } else if (y>x && y> z){
     return y;         
    } else if (z>x && z> y){
        return z;         
       }          

}
console.log(maxOfThree(20,25,10)); // Output:  25

/**
 * Q3: Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 */

 function isVowel(ch){
     let vowels = ['a','i','e','o','u','A','I','E','O','U'];
     return vowels.includes(ch);
 }
 console.log(isVowel('a')); //  Output: true

 /**
  * Q4: Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers.
  *         For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach 
  *         (i.e. for…loop or while…loop)
  */

  function sum(numbers){
      let sum=0;
      for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
      }
      return sum;
  }


  function multiply(numbers){
    let prod=1;
    for (let i = 0; i < numbers.length; i++) {
        prod *= numbers[i];
    }
    return prod;
}

  let nums = [1,2,3,4];
  console.log(sum(nums)) // Output: 10
  console.log(multiply(nums)) // Output: 24

  /**
   * Q5: Define a function reverse() that computes the reversal of a string. 
   *      For example, reverse("jag testar") should return the string "ratset gaj".
   */

  function reverse(str){
    return str.split('').reverse().join('') 
   }
 
   console.log(reverse("jag testar")) //  Output: ratset gaj

   /**
    * Q6: Write a function findLongestWord() that takes an 
    *     array of words and returns the length of the longest one.
    */

    function findLongestWord(str){
            var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
             return longestWord[0];
    }
    
    console.log(reverse("read a javascript")) //Output: javascript

    /**
     * Q7: Write a function filterLongWords() that takes an array of words and an integer i and 
     *      returns a new array containing only those words that were longer than i characters.
     */
   
    function filterLongWords(str, len){
        let strs = [];
        for (let i = 0; i < str.length; i++) {
            if(str[i].length > len)  
            strs.push(str[i]);              
        }
        return strs;
    }
 
    let words =["the", "great", "ottoman", "empire" ,"has", "fallen", "over", "the", "years" ];
    console.log(filterLongWords(words,3)) // output: ["great", "ottoman", "empire", "fallen", "over", "years"]

    /**
     * Q8: 	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and 
     *      returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. 
     *      Note: Write your Javascript code without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
     */
      function computeSumOfSquares(numbers) {
        const result = numbers.map(function (elem, i, numbers) {
            return elem * elem;
        }).reduce(function (prev, elem, i, result) {
            return prev + elem;
        });
        return result;
    }
    
    let nums = [1, 2, 3];
    console.log(computeSumOfSquares(nums));// output: 14

    /**
     * Q9: Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.
     */

    function printOddNumbersOnly(numbers) {
      return numbers.filter(function (elem, i, numbers) {
          return elem%2!==0;
      });
  }
  
  let nums = [1, 3, 3, 4, 5,8,8];
  console.log(printOddNumbersOnly(nums));// output: [1, 3, 3, 5]

  /**
   * Q10: Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and 
   *      returns the sum of the squares of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) 
   *      should be computed as 22 + 42 = 20.
   */

  function computeSumOfSquaresOfEvensOnly(numbers) {
    return numbers.filter(function (elem, i, numbers) {
        return elem % 2 === 0;
    }).map(function (elem, i, numbers) {
        return elem * elem;
    }).reduce(function (prev, elem, i, numbers) {
        return prev + elem;
    });
}

let nums = [1, 2, 3, 4, 5,];
console.log(computeSumOfSquaresOfEvensOnly(nums));// output: 20

/**
 * Q11: Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. 
 *      i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. 
 */

function sum(numbers) {
  return numbers.reduce(function (prev, elem, i, numbers) {
      return prev + elem;
  });
}


function multiply(numbers) {
  return numbers.reduce(function (prev, elem, i, numbers) {
      return prev * elem;
  });
}

let nums = [1, 2, 3, 4];
console.log(sum(nums)) // Output: 10
console.log(multiply(nums)) // Output: 24

/**
 * Q12: Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and 
 *      returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. 
 *      (Note: Do not use sorting!)
 */

function findSecondBiggest(numbers) {
  var max = Math.max.apply(null, numbers); 
  numbers.splice(numbers.indexOf(max), 1); 
  return Math.max.apply(null, numbers); 
}


let nums = [1, 2, 3, 4,5];
console.log(findSecondBiggest(nums)) // Output: 4

/**
 * Q13.	Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence, 
 *      e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", 
 *      as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), 
 *      prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
 */

function fibonacci_series(number, a, b) {
  let val;
  if (number === 1) {
      return [0];
  }

  if (number === 2) {
      return [0, 1];
  } else {
      val = fibonacci_series(number - 1);
      val.push(val[val.length - 1] + val[val.length - 2]);
      return val;
  }
};

console.log(fibonacci_series(6, 0, 1));// Output: [ 0, 1, 1, 2, 3, 5 ]

/**
 * Q14. 14.	Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:

          a.	Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
          b.	New Product Form: Add code such that when the Submit button is clicked, the values entered in the input fields are displayed in a pop-up window.

 */

 console.log("https://gebrenew2018.github.io/CS472-WAP/product/index.html")