// for (let i = 1; i<=100; i = i+=5){

// console.log('hello:', i)

// }

// for (let i = 1; i<=100; i++){

//     console.log(`${i}*${9} = ${i*9}`)
    
//     }


//     for (let j=50;j>=10; j-=10){

//         console.log(j)
//     }


// // array loops

// const examresuilts=[12,34,67,99,56]

// for(let a=0; a<examresuilts.length; a++){

// console.log(a, examresuilts[a])

// }


// // reverse

// const word = 'apoll0'
// let reveseword =''
// for (let i= word.length;i>=0;i--){

//    console.log( reveseword +=word[i] )
// }



for (let i = 0; i<=5; i++){

    console.log(i)
}

let j= 0

while (j<=5){

console.log(j)

j++

}


// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

const target = Math.floor(Math.random()*10)

let guess = Math.floor(Math.random()*10)

while(target!=guess){

    console.log(`TARGET:${target} GUESS:${guess}`)
    guess = Math.floor(Math.random()*10)
   // break

}



// For OF



let name = ['sat','kum','pra','hop']

for(i=0; i<name.length; i++){

    console.log(i)


}

for(let values of name){

    console.log(values)

}

for(let char of 'cypresstraining'){
 
    console.log(char.toUpperCase())

}



//objects


const movieReviews = {
Master  : 8,
ROBO    : 9,
Arrival : 7

}

for (let movie of Object.keys(movieReviews)){

    console.log(movie,movieReviews[movie])
}



for (let rattings of Object.values(movieReviews)){

    console.log(rattings,movieReviews[rattings])

}


// for/in - loops through the properties of an object



const shopping ={

toys : 'car',

floor : 'wheet',

soups : 'lux'

}


for (let prop in shopping ){

    console.log(prop)
}



for(let k in [90,98,78,12]){
    console.log(k)


}

















