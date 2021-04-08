
var a = 4;
var b = 5;
console.log(a ^ b);

let shopping = ['ice','pen','cheese','salt','drink bottles']

let numberqty =[23,56,78,54,90]

console.log(shopping)
console.log(numberqty)

console.log(shopping[0])
console.log(shopping[4])
console.log(numberqty[5])
console.log(numberqty.length)
console.log(numberqty[-2])

shopping[0] ='modified'
console.log(shopping)
shopping[5] ='modifiedend'

shopping[shopping.length]='tomatoes'

numberqty[0]= 'got it'
console.log(numberqty)


// push  -- add to end
// pop -- remove from end
// shift - remove from start
// unshift - add to start

let topsongs = ['life on mars','god songs','first time ever']

topsongs.push('plesant songs')

console.log(topsongs)
topsongs.unshift('abcd')
topsongs.pop()
console.log(topsongs)
topsongs.shift()
console.log(topsongs)

// concat  - mearging arrays
// includes -- look for values
//indexof -just like string index
//join - create a string from arr
// reverse - reveerse the array
//slice -copy portion of an arror
//sort- sorts an array


//let rev= letter.reverse()

//console.log(rev)
//Remember that reverse() mutates the original array.
//It reverses IN PLACE rather than making a copy
//let song = letters.reverse().join('.');
//"R.E.S.P.E.C.T"


let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

let songs = animals.reverse().join('---');

console.log(songs)

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
console.log(animals.splice(1, 0, 'octopus'))
num =[0,99,89,87,123]
console.log(animals.sort())
console.log(num.sort())



//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]



// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;
console.log(x,y)
//If we change x
x = 99;
//y is unchanged
//y; //100
console.log(x,y)

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let nums = [ 2, 4, 6, 8 ];
let myNums = nums; //myNums references the same array

// If we change nums
nums.push('BOO!');

//My nums is also changed:
myNums; //[2, 4, 6, 8, "BOO!"]

// nested array
console.log(myNums[0])
const animalPairs = [
	[ 'doe', [ 'buck', 'stag' ] ],
	[ 'ewe', 'ram' ],
	[ 'peahen', 'peacock' ]
];



[]
//To access 'ewe'
animalPairs[1][0];
console.log(animalPairs[1][0])
//To access 'buck'
console.log(animalPairs[0][1][1])
//Updating a sub-array:
animalPairs[0][1].push('hart');
//apparently some people call male deer 'harts'.  idk.


numsort =[0,99,89,87,123]
console.log(numsort.sort())
console.log(numsort.sort(function(a, b){return a-b}));    // Sort the numbers in the array in descending order
