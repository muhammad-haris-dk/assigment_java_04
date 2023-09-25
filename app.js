// // *******Q1********

// var userInput = prompt("Ente your name").toLowerCase()

// console.log(userInput);

// // *******Q2********

// var x = prompt("Enter Your Father Name").toLowerCase()

// console.log(x);

// // *******Q3********

// var y = prompt("Enter Your Graduate").toUpperCase()

// console.log(y);

// // *******Q4********

// var firstName = "MUHAMMAD"

// var result = firstName.toLowerCase()

// console.log(result);

// // *******Q5********

// var city = prompt("Where do you live..")

// city = city.toLowerCase()

// var arr = ["karachi","islamabad","lahore","peshawar"]

// var flags = false;

// for(var i = 0; i < arr.length; i++){
//     if (city === arr[i]) {
//         flags = true;
//     }
//     }

// if (flags) {
//     console.log("Match");
// }else{
//     console.log("not match");
// }

// // *******Q6********

// var city = prompt("Where do you live..")

// city = city.toUpperCase()

// var arr = ["KARACHI","ISLAMABAD","LAHORE","PESHAWAR"]

// var flags = false;

// for(var i = 0; i < arr.length; i++){
//     if (city === arr[i]) {
//         flags = true;
//     }
//     }

// if (flags) {
//     console.log("Match");
// }else{
//     console.log("not match");
// }

// // *******Q7********

// var userInput = prompt("Where do you live")

// var firstChar = userInput.slice(0,1).toUpperCase()

// var lastChar = userInput.slice(1).toLowerCase()

// var combineChar = firstChar + lastChar

// var city = ["Karachi","Peshawar","Quetta","Islamabad"]

// var flag = false;

// for(var i = 0; i < city.length; i++){
//     if (combineChar === city[i]) {
//         flag = true;
//     }
// }

// if (flag) {
//     console.log("match");
// }else{
//     console.log("not match");
// }

// ********Chapter no 01 is complete here**********

// ********Chapter no 02 is start here**********

// // *******Q1********

// var text = "Captain"

// for(var i = 0; i < text.length; i++){
//     if (text.slice(i, i + 2) === "ap") {
//         text = text.slice(0, i) + "er" + text.slice(i + 2)
//     }
// }

// console.log(text);

// // *******Q2********

// var text = "Captain"

// text = text.length;

// console.log(text);

// // *******Q2********

// var text = "Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey. Their coats are yellow-gold, and adult males have shaggy manes that range in color from blond to reddish-brown to black. The length and color of a elephants mane is likely determined by age, genetics and hormones."

// for(var i = 0; i < text.length; i++){
//     if (text.slice(i, i+ 9) === "elephants") {
//         text = text.slice(0, i) + "<b>" + "<u>" + "lion's" + "</u>" + "</b>" + text.slice(i + 9)
//     }
// }

// document.write(text);

// // *******Q3********

// var myString = "Hello, World!";

// var numberOfCharacters = myString.length;

// var characterCount = numberOfCharacters;

// console.log("Number of characters:", characterCount);

// // *******Q4********

// var myString = "Hello, World!";

// var characterCount = myString.length;

// var slicedString = myString.slice(0, 1) + myString.slice(-3);

// console.log("Sliced String:", slicedString);

// // *******Q5********

// var text = "To be or not to be.";
// var indx = text.indexOf("be");

// // *******Q6********

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// // *******Q7********

// var text = "To be or not to go, that is the way to go.";
// var indx = text.lastIndexOf("go");
// if (indx !== -1) {
//     indx = text.lastIndexOf("go", indx);
// }

// console.log("Index of the first character of the last 'go':", indx);

// // *******Q8********

// var indexNum = 0;

// var yourString = prompt("Enter your string")

// if (indexNum >= 0 && indexNum < yourString.length) {
//     console.log(yourString);
// }

// // *******Q9********

// var myString = "abcde";
// var characterAtIndex2 = myString.charAt(2);

// console.log(characterAtIndex2);

// *******Q10********

var text = "YourStringHere";

var cha = text.charAt(9);

console.log(cha);

// *******Q11********

