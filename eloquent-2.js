//LOOPING TRIANGLE
var pyramid = '#';
for (var i = 0; i < 7; i++){
  console.log(pyramid);
	pyramid += '#';}

  //FizzBuzz
  for (var number=1; number <= 100; number++){
if (number % 3 == 0 && number % 5 == 0){
  console.log("FizzBuzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(number)
}
}

//CHESS BOARD 8x8 BOARD

var white = " ";
var black = "#";
for (var line = 1; line <= 8; line++) {

if (line % 2 != 0){
  var oddLine = white + black + white + black + white + black + white + black;
  console.log (oddLine);
}
  else {
  var evenLine = black + white + black + white + black + white + black + white;
  console.log(evenLine);
}
}

//I couldn't figure out the any size problem. This is as close as I got before looking at the solution


var white = " ";
var black = "#";
var standard = white + black;
size = 5;

if (size === 1) {
console.log(white);
} else if (size > 1){

  for (var line = 1; line <= size; line++){
 	if (line % 2 != 0) {
    var lengthSize = Math.floor((size-1)/2);
    var counter = 1;
    var oddLine = white + black;
      while (counter < lengthSize) {
        counter++;
      oddLine += oddLine;}
     console.log(oddLine+white);
   } else {
     var lengthSize = Math.floor((size-1)/2);
     var counter = 1;
     var evenLine = black + white;
      while (counter < lengthSize) {
        counter++;
      evenLine += evenLine;}
     console.log(evenLine+black);
   }
  }
}
