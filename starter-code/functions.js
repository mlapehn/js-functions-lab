// Question 1
function maxOfTwoNumbers() {
Math.max(5,10)
}

// Question 2
function maxOfThree() {
Math.max(-10,7,5)
}

// Question 3
function isCharacterAVowel() {
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

// Question 4
function sumArray() {
 var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
    return total + Math.round(num);
}


// Question 4
function multiplyArray(array) {
	var sum = 0;
	for(i = 0, i < array.length, i++){
		sum += array[i];
	}
	return sum;
}
// we want to return sum
// need a for loop to generate sum
// 

// Question 5
var numberOfArguments = function() {
	return arg.length
}
//

// Question 6
var reverseString = function ()(rstr){
  var arr = rstr.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};



// Question 7
function findLongestWord (arr) {
  longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}



// Question 8
function filterLongWords () {
  
}


// Bonus 1
function charactersOccurencesCount() {
  
}

