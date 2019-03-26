// Star Maker
//
// Write a loop that shows an increasing number of asterisks each time the loop is executed.
// Execute the loop twenty times.
// Sample output (showing only ten iterations):
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
//
// Extra credit: Use a "Z" instead of a star every third iteration
/**********WRITE CODE HERE***********/
// var stars = "";
// for (var i = 1; i <= 20; i++) {
//   stars += (i%3===0 ? "Z" : "*");
//   if ( i % 3 === 0)
//  {
//    stars += "Z";
//  } else
//  {
//    stars += "*";
//  }

//
//   console.log(stars);
// }
// alternative: console.log("*".repeat(i)); but that doesn't work for "Z";
/**********END CODE******************/




// Fibonacci Sequence
//
// Display a Fibonacci sequence of a length specified by the user. Your program should:
// a.	Allow the user to input a number
// b.	Show the Fibonacci sequence for as many iterations as the number input by the user
// c.	Example: If the user inputs 7, the output would be 0, 1, 1, 2, 3, 5, 8
/**********WRITE CODE HERE***********/
// var a = 0;
// var b = 1;
// var c;
// var fibSequence = [a, b];
// var fibLength = parseInt(prompt("Input a number"));
// for (var i = 0; i < fibLength; i++) {
//   c = a + b;
//   fibSequence.push(c);
//   a = b;
//   b = c;
// }
// console.log(fibSequence);
/**********END CODE******************/


// Backwards Talk
//
// An alien spacecraft lands in your back yard. The green dudes are friendly, but have unfortunately learned to speak our language backwards. In order to communicate with them, you’ll have to translate a phrase into its reverse counterpart. Your program should:
// a.	Allow the user to input a phrase
// b.	Display the words of that phrase backwards
// i.	Example: If the user inputs “who ate these cookies” the output should be “cookies these ate who”
// ii.	Partial credit awarded for showing all the letters backwards, e.g. “ohw eta eseht seikooc”
// c.	EXTRA POINTS: Display all the permutations of the phrase
// i.	Example: “who ate these cookies”, “ate these cookies who”, “these cookies who ate”, “cookies who ate these”
/**********WRITE CODE HERE***********/
// var phrase = prompt("Input a phrase");
// console.log(phrase.split(" ").reverse().join(" "));
// var words = phrase.split(" ");
// for (var i = 0; i < words.length; i++) {
//   console.log(words.join());
//   words.push(words.shift());
// }
/**********END CODE******************/


// Currency converter
//
// Write a program that converts U.S. Dollars to Euros, Indonesian Rupiah, Japanese Yen, and Chinese Yuan, using today’s rates. Your program must do the following:
//
// a.	Allow the user to input a number representing dollars (whole dollars only)
// b.	Convert the number to Euros
// c.	Convert the number to Rupiah
// d.	Convert the number to Yen
// e.	Convert the number to Yuan
// f.	Display all five values to 3 decimal places
/**********WRITE CODE HERE***********/
// var dollars = parseInt(prompt("Input a dollar amount", "whole dollars only")).toFixed(3);
// var euros = (dollars * 1.006).toFixed(3); // get real exchange rates online
// var rupiah = (dollars * 100.03).toFixed(3); // get real exchange rates online
// var yen = (dollars * 2.765).toFixed(3); // get real exchange rates online
// var yuan = (dollars * 0.888).toFixed(3) // get real exchange rates online
// console.log(dollars, euros, rupiah, yen, yuan);
/**********END CODE******************/



// Name Sorter
//
// Write a program that allows the user to input 5 names, then displays all the names in alphabetical order.
//
// Extra credit: Display the names in reverse alphabetical order.
/**********WRITE CODE HERE***********/
// var names = [];
// while (names.length < 5) {
//   names.push(prompt("Type in a name"));
// }
// names.sort();
// // names.reverse();
// console.log(names);
/**********END CODE******************/



// Phrase Combobulator
//
// Write a program that allows the user to input a phrase, then displays all the letters of that phrase in random order.
/**********WRITE CODE HERE***********/
// var phrase = prompt("Input a phrase");
// var phraseArr = phrase.split("");
// var newPhrase = "";
// while (phraseArr.length > 0) {
//   var ranNum = Math.floor(Math.random() * phraseArr.length);
//   newPhrase += phraseArr[ranNum];
//   phraseArr.splice(ranNum,1);
// }
// console.log(newPhrase);
/**********END CODE******************/




// Annoying Name Repeater
//
// Write a program that allows the user to input a name, then displays that name 500 times in the document window (not in the console).
/**********WRITE CODE HERE***********/
// var paragraph = document.createElement("p");
// var text;
// var phrase = "";
// var name = prompt("Input your name");
// for (var i = 1; i <= 500; i++) {
//   phrase += name + " ";
// }
// paragraph.appendChild(document.createTextNode(phrase));
// document.body.appendChild(paragraph);
/**********END CODE******************/



// Loop DeLoop
//
// Write a program that:
// 1. asks the user for a number
// 2. counts from that number down to 0
// 3. subtracts 1 from the number
// 4. counts from that number down to 0
// 5. continues until the original number reaches 0
//
// Your output should look like this (assume the user typed in the number 5):
//
// 5 4 3 2 1 0 4 3 2 1 0 3 2 1 0 2 1 0 1 0
/**********WRITE CODE HERE***********/
// var output = "";
// var numCount = parseInt(prompt("Input a number"));
// for (var i = numCount; i > 0; i--) {
//   for (var j = i; j >= 0; j--) {
//     output += j + " ";
//   }
// }
// console.log(output);
/**********END CODE******************/




// Alphabet Numbers
//
// Write a program that asks the user for a number between 1 and 26 (inclusive), then displays that many letters of the alphabet. For example, if the user types in 3, the output would be "abc". If the user types in 9, the output would be "abcdefghi".
//
// Extra credit: Only allow the user to type the numbers 1 through 26.
/**********WRITE CODE HERE***********/
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var marker = -1;
// while (marker < 1 || marker > 26|| isNaN(marker)) {
//   marker = parseInt(prompt("Input a number between 1 and 26 (inclusive)"));
// }
// console.log(alphabet.slice(0, marker));
/**********END CODE******************/



// Sum 1 to n
//
// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
/**********WRITE CODE HERE***********/
// var numInput = parseInt(prompt("Input a number"));
// var sum = 0;
// for (var i = 1; i <= numInput; i++) {
//   sum += i;
// }
// console.log(sum);
/**********END CODE******************/


// String length
//
// Write a program that asks the user to input a word, then calculates the following:
// If the word is longer than 10 letters, tell the user they are smart.
// If the word is longer than 5 letters, tell the user they are wise.
// Otherwise, tell the user thank you.
// Extra credit: If the user inputs more than one word, make them do it over.
/**********WRITE CODE HERE***********/
// function hasSpaces(aWord) {
//   for (var i = 0; i < aWord.length; i++) {
//     if (aWord.charAt(i) === " ") {
//       return true;
//     }
//   }
//   return false;
// }
// var word = "";
// while (word.length === 0 || hasSpaces(word)) {
//   word = prompt("Input a word");
// }
// if (word.length > 10) {
//   console.log("You are smart");
// } else if (word.length > 5) {
//   console.log("You are wise");
// } else {
//   console.log("Thank you");
// }

/**********END CODE******************/





// Secret Number
//
// Write a guessing game where the user has to guess a secret number (randomly generated by the computer between 1 and 1000). After every guess the program tells the user whether his number was too large or too small. After the user gets the right number, the number of tries needed should be shown.
/**********WRITE CODE HERE***********/
// var ranNum = Math.floor(Math.random() * 1000 + 1);
// var numTries = 0;
// var userGuess = parseInt(prompt("Guess a number between 1 and 1000"));
// var highOrLow = "";
// while (userGuess !== ranNum) {
//   if (userGuess > ranNum) {
//     highOrLow = "high";
//   } else if (userGuess < ranNum) {
//     highOrLow = "low";
//   }
//   numTries++;
//   userGuess = parseInt(prompt("Your guess was too " + highOrLow + ". Guess again."));
// }
// console.log("The number was " + ranNum + ". It took you " + numTries + " tries.");
/**********END CODE******************/



// Lists Combined
//
// Write a function that combines two lists (each with ten elements) into a third list by alternatingly taking elements, then displays that third list.
// e. g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
/**********WRITE CODE HERE***********/
// var list1 = [1,2,3,4,5,6,7,8,9,10];
// var list2 = [25,35,45,55,65,75,85,95,105];
// var list3 = [];
// for (var i = 0; i < list1.length; i++) {
//   list3.push(list1[i], list2[i]);
// }
// console.log(list3);
/**********END CODE******************/




// Pig Latin
//
// Write a function that translates a phrase (typed in by the user) into Pig Latin. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
/**********WRITE CODE HERE***********/
// var phrase = prompt("Type in a phrase");
// var wordArr = phrase.split(" ");
// var pigWord = "";
// var temp = "";
// for (var i = 0; i < wordArr.length; i++) {
//   pigWord = wordArr[i];
//   temp = pigWord.charAt(0);
//   pigWord = pigWord.slice(1) + temp;
//   wordArr[i] = pigWord + "ay";
// }
// console.log(wordArr);
/**********END CODE******************/



// Morse Code
//
// Write a program that automatically converts English text to Morse code.
// (Create a variable consisting of a phrase in English. Write a function that converts the English to Morse Code and displays the result in the console. Call the function.)
/**********WRITE CODE HERE***********/
// var phrase = "hello world";
// var result = "";
// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
// var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."," "];
// var letter = "";
//
// function convertToMorse(aLetter) {
//     var index = alphabet.indexOf(aLetter);
//     return morse[index];
// }
//
// console.log(phrase);
// for (var i = 0; i < phrase.length; i++) {
//     letter = phrase.charAt(i);
//     result += convertToMorse(letter) + " ";
// }
// console.log(result);
/**********END CODE******************/


// Increasing Counter
//
// Write a program that uses loop(s) to display the numbers 1 to 10, then 2 to 11, then 3 to 12...all the way up to 10 to 19. Your output should look like this:
//
// 12345678910
// 234567891011
// 3456789101112
// 45678910111213
// 567891011121314
// 6789101112131415
// 78910111213141516
// 891011121314151617
// 9101112131415161718
// 10111213141516171819
//
// Each number sequence should be on a separate line.
/**********WRITE CODE HERE***********/
// var numString = "";
// for (var i = 1; i <= 10; i++) {
//   for (var j = i; j < i + 10; j++) {
//     numString += j;
//   }
//   console.log(numString);
//   numString = "";
// }
/**********END CODE******************/


// fizz-buzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz." For numbers which are multiples of both three and five print "FizzBuzz."
// Sample output:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz ... etc. up to 100

// Extra Credit: If the number is prime, print "prime"
/**********WRITE CODE HERE***********/
// for (var i = 1; i <= 100; i++) {
//     if (i > 1 && isPrime(i)) {
//         console.log(i, "prime");
//     } else if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }
//
// function isPrime(aNum) {
//     for (var j=2; j <= aNum/2; j++) {
//         if (aNum % j === 0) {
//             return false;
//         }
//     }
//     return true;
// }
/**********END CODE******************/



// Average score
//
// A class of seven students took a test, and now the teacher wants to calculate the average score. Write a program in JavaScript that does the following:
//
// 1.	Allow the user to input seven different scores
// 2.	Compute the average of all those scores
// 3.	Display the average on the screen
//
// Your project MUST use a function!
/**********WRITE CODE HERE***********/
// var scores = [];
// while (scores.length < 7) {
//     scores.push(parseInt(prompt("Please input a score")));
// }
// var avg = scores.reduce(function(total, num) {
//     return total + num;
// }) / scores.length;
// console.log("the average is", avg);
/**********END CODE******************/


// Change Calculator
//
// Write a program to calculate the least number of coins to return to someone when the item they buy costs less than a dollar, and they hand you a dollar bill to pay for it. The program must allow the user to input a number representing the item’s price, then determine how many quarters, dimes, nickels, and pennies to return, and display that information on the screen.
// Extra Credit: Extend the program to handle any amount of money (up to $100 bills)
/**********WRITE CODE HERE***********/
// var price = parseInt(prompt("How much did the item cost (in cents)?"));
// var numQuarters, numDimes, numNickels, numPennies;
// var change = 100 - price;
// numQuarters = Math.floor(change / 25);
// change -= numQuarters * 25;
// numDimes = Math.floor(change / 10);
// change -= numDimes * 10;
// numNickels = Math.floor(change / 5);
// change -= numNickels * 5;
// numPennies = change;
// console.log("Your change is:", numQuarters + " quarters", numDimes + " dimes", numNickels + " nickels", numPennies + " pennies");
/**********END CODE******************/



// Name Amalgamator
//
// Write a program that takes ten names from a list and combines the first letters from each name into a word, then the second, then the third, etc. until the list is exhausted.
// Sample list: Russell, Michael, Rachelle, Michalle, Sandra, Stan
// Sample output: RMRMSS, uiaiat, scccna, shhhdn, eaear, lella, llll, ee
/**********WRITE CODE HERE***********/
// var names = ["Russell", "Emily", "Jason", "Amir", "Mariah", "Nina", "John", "Reggie", "Raquel", "Tommy"];
// var longestWord = 0;
// var newName = "";
// for (var a = 0; a<names.length; a++) {
//     if (names[a].length > longestWord) {
//         longestWord = names[a].length;
//     }
// }
// for (var i=0; i<longestWord; i++) {
//     for (var j=0;j<names.length; j++) {
//         newName += names[j].charAt(i);
//     }
//     console.log(newName);
//     newName = "";
// }
/**********END CODE******************/


// Best Savings Account EVER!
//
// The First National Bank of Fake News recently created a new savings account that doubles the customer’s balance every year until it reaches one million dollars.
//
// Write a program that prompts the user for a starting balance and then prints the number of years it takes to reach $100,000 and also the number of years it takes to reach $1,000,000.
//
// Sample session:
//
// Enter starting balance: 10000
// It takes 4 years to reach $100,000.
// It takes 7 years to reach $1,000,000.
//
// Extra credit: Show what the balance would be after 50 years.
/**********WRITE CODE HERE***********/
// var startingBalance = parseInt(prompt("How much is your starting balance?"));
// var balance = startingBalance;
// var numYears = 0;
// while (balance < 100000) {
//   balance *= 2;
//   numYears += 1;
// }
// console.log("Starting balance: " + startingBalance);
// console.log("It takes " + numYears + " years to reach $100,000.");
// while (balance < 1000000) {
//   balance *= 2;
//   numYears += 1;
// }
// console.log("It takes " + numYears + " years to reach $1,000,000");
/**********END CODE******************/



// Line Maker
//
// Write a program (using the HTML5 Canvas) that generates two diagonal lines from each corner to the opposite corner of the canvas, thus drawing an X. In the center, draw a circle with a radius one-tenth the width of the canvas. Use any colors and line thicknesses, any canvas width and height.
// Extra credit: Ask the user to input a number for the width and height of the canvas.
/**********WRITE CODE HERE***********/

/**********END CODE******************/
