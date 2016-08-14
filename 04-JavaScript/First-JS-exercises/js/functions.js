//EXERCISE 1
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"

/*
function dniLetter(dni) {
	var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	var result = 'Invalid parameter';
	if (dni > -1) {
		result = lockup.charAt(dni % 23);
	}
	return result;
}

console.log(dniLetter(12345678) === 'Z');
console.log(dniLetter(34667892) === 'S');
console.log(dniLetter(92234488) === 'A');
*/


//EXERCISE 2
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Improve the exercise above to be able to perform this new functionality
// Of course it has to keep working as usual with right inputs.

/*
console.log(dniLetter(-1) === 'Invalid parameter');
console.log(dniLetter("A1234567") === 'Invalid parameter');
*/

//EXERCISE 3
//
// Restore the comments marks (/* */) of the previous exercises. First two exercises have to be commented 
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Write a function that takes an array of words and returns the length of the longest one.

/*
function findLongestWord(array_words) {
	var longest_word_length = current_word_length = 0;
	for(var current = 0, array_words_length = array_words.length; current < array_words_length; ++current) {
		current_word_length = array_words[current].length;
		if (current_word_length > longest_word_length) {
			longest_word_length = current_word_length;
		}
	}
	return longest_word_length;
}

console.log(findLongestWord(["Richie", "Joanie", "Greg", "Marcia", "Bobby"]) === 6);
console.log(findLongestWord(["Blanka", "Zangief", "Chun Li", "Guile"]) === 7);
console.log(findLongestWord(["Red", "Blue", "Green"]) === 5);
*/

//EXERCISE 4
//
// Uncomment the exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// You have to complete the calculateAverage function (it is a few lines below), and it has
// to return the average of every number in a array instead of the "Not implemented yet" message.

/*
var array_lengths = [];

array_lengths.push(findLongestWord(["Richie", "Joanie", "Greg", "Marcia", "Bobby"]));
array_lengths.push(findLongestWord(["Blanka", "Zangief", "Chun Li", "Guile"]));
array_lengths.push(findLongestWord(["Red", "Blue", "Green"]));
//<place to add more lines>, read next commented text and you will understand
array_lengths.push(findLongestWord(["Lennon", "McCartney", "Harrison", "Starr"]));

console.log("These are the longest lengths of each group: " + array_lengths);
console.log(calculateAverage(array_lengths) === 6 && "The average of longest lengths is: " + calculateAverage(array_lengths));

function calculateAverage(array) {
	var average = 0,
		array_length = array.length;
	if (array_length) {
		for(var current = sum = 0; current < array_length; ++current) {
			sum += array[current];
		}
		average = sum / array_length;
	}
	//return("Not implemented yet");
	return average;	
}
*/

// Now add more lengths to the array_lengths. You have to do it where <place to add more lines> is written. 
// You can use this structure: array_lengths.push( findLongestWord( [<add some elements>] ) );
// Don't foget to add words to the array. The longer the better!
// Now reload the page and see how changed the average.

//EXERCISE 5
//
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment this exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// As a condition you must use the object freqCounter.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

/*
function charFreq(string) {
	freqCounter = {};

	for (var current_char = '', current = 0, string_length = string.length; current < string_length; ++current) {
		current_char = string.charAt(current);
		freqCounter[current_char] ? ++freqCounter[current_char] : freqCounter[current_char] = 1;
	}
	return freqCounter;
}

counter = charFreq("abbabcbdbabdbdbabababcbcbab");
console.log( counter['a'] === 7);
console.log( counter.b === 14);
console.log( counter['c'] === 3);

counter = charFreq("xyyyxyxyxzyxyzyxyxyasdfz");
console.log( counter.x === 7 );
console.log( counter['y'] === 10 );
console.log( counter.z === 3 );
console.log( counter['a'] === 1 );
console.log( counter['s'] === 1 );
console.log( counter.d === 1 );
console.log( counter['f'] === 1 );
*/

//BONUS EXERCISE
//
// Restore the comments marks (/* */) of the previous exercise
// Uncomment the exercise code deleting /* and */ chars
// Build a program that transform a boring array into an awesome array.
// The original array has to go through many processes, we divided every process
// in functions. You have to code these functions.
// Here you have some useful functions you can use wherever you need along the program.
// isFinite(), splice(), unshift(), push(), join(), sort(), Math.floor().
// These aren't all the needed functions, and also you can use different ones. They are only suggested functions.
// If you want to know what do they do or learn more functions, you can go to
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// http://www.w3schools.com/js/default.asp
// Use the search option in both of them to find a function.

function arrayAwesomenator(array) {
  array = deleteRubbish(array);
  array = arrangeElements(array);
  array = beautifyLetters(array);
  array = beautifyNumbers(array);
  array = sortArray(array);
  array = arrayToString(array);
  return array;
}

function deleteRubbish(array) {
	//It receives an array and returns it without '*' chars
	//Example:  deleteRubbish(['a',1,'*',5]) returns ['a',1,5]
	array.forEach(function(element, index, array) {
		if (element === String.fromCharCode(42)) {
			array.splice(index, 1);
		}
	});
	return array;
}

function arrangeElements(array) {
	//It receives an array with numbers and letters mixed and returns it with its items arrange:
	//First goes the numbers and then the letters. The order of the elements together does not matter.
	//Example: arrangeElements(['B', 'a', 4 , 23, 'J']) returns [23, 4, 'B', 'a', 'J']
	return array.sort();
}

function beautifyLetters(array) {
	//It receives an array with numbers and letters and returns it with uppercase vowels and lowercase consonants. Numbers remain unchanged
	//Example: beautifyLetters([1,5,7,'a','J',p,'E']) returns [1,5,7,'A','j',p,'E']
    var vowels = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117, 193, 201, 205, 211, 218, 225, 233, 237, 243, 250];
	array.forEach(function(element, index, array) {
		charCodeElement = element.toString().charCodeAt(0);
        var isVowel = (vowels.indexOf(charCodeElement) > -1 ? true : false);
		var isLetters = isVowel ||
                        (charCodeElement >= 65 && charCodeElement <= 90) ||
				   	    (charCodeElement >= 97 && charCodeElement <= 122);
		var isLower = (charCodeElement > 96 && charCodeElement < 193) || charCodeElement > 224;
		if (isLetters) {
			if (isVowel) {
				if (isLower) {
					array[index] = array[index].toUpperCase();
				}
			} else {
				array[index] = array[index].toLowerCase();
			}
		}
	});
	return array;
}

function beautifyNumbers(array) {
	var elementLength, sum;
	array.forEach(function(element, index, array) {
        var isNumber = !isNaN(element);
        element = element.toString().trim();
		elementLength = element.length;
		var isValidNumber = isNumber && elementLength;
		if (isValidNumber) {
			do {
                sum = 0;
				for (var current = 0; current < elementLength; ++current) {
					sum += parseInt(element[current], 10);
				}
				array[index] = sum;
				element = sum.toString();
				elementLength = element.length;
			} while(elementLength > 1)
		}
	});
	return array;
}

function sortArray(array) {
	//It receives an array with numbers and letters and returns it with its items sorted. Numbers on one side and letters on the other.
	//Example: sortArray([5,5, 4, 1, 'j', A','b', 'E']) returns [1, 4, 5, 5, 'A', 'b', 'E', 'j']
    array.sort(function(pre, pos) {
        return pre.toString().localeCompare(pos.toString());
    });
    return array;
}

function arrayToString(array) {
	//It receives an array and returns a string with all its elements.
	//Example: arrayToString([1, 4, 5, 5, 'A', 'b', 'E', 'j']) returns "1455AbEj"
    return array.join('').trim();
}

console.log(arrayAwesomenator(["a", 6, "B", "F", "*", 8, 78, "J"]) === "668Abfj");
console.log(arrayAwesomenator(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y" ]) === "46688AAbcfjjqry");

