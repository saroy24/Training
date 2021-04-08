// // simple if condition

// if(1 ==1 ) {

// console.log(' its true')

// }

// let age =50

// if(age<= 40){
//  console.log('my age is above 40')

// }

// // else if 

// let rating = 4

// if (rating===3){
//     console.log('you are ok')
// }
// else if(rating===2){

//     console.log('you are happy')
// }
// else if (rating===4){
 
//     console.log('you are sad')

// }


// //else condition

// let score = 1200
// let appscore = 1200

// if (score == appscore ) {
// console.log('score is same')

// }
// else {
//     console.log('score is  not same')


// }


// // nested conditions

// let paswword = 'goodday'
// // parent if condition 
// if(paswword.length >= 7){

// if(paswword.indexOf(' ') != -1){
//     console.log('index1')

// }
// else{
//     console.log('index2')
// } 

// }

// else {

//     console.log(' parent condition index3')

// }




// if (4=9){

// if(4 == 4){


// }
// else{

// }



// }

// else {
// console.log('parent not satified')

// }

// logical operaters

//AND, OR,,NOT OPERATER

// AND --->   &&
// OR--->  !!
// NOT operater-- !

//&& operate

let num =16

if (num==16 && num ==20 && num==78){

    console.log('num is between 1 to 10 ----- AND')

}else{

    console.log('num is not between 1 to 10--- AND')

}


//OR ||



let num1 =16

if (num1==16 || num1 ==20 || num1== 24){

    console.log('num is between 1 to 10--- OR')

}else{

    console.log('num is not between 1 to 10------OR')

}


// NOT Operater !

///!null // true

//(0 === 0)  --- true

//!(0 === 0)  --- false


let flavor ='watermelon'


if (flavor !== 'grape' && flavor !== 'cherry' ){

console.log('we dont have flavor')

}


if (!(flavor == 'grape' || flavor == 'cherry' )){

    console.log('we  have flavor grape and cherry ')
}

// opearter precedence
// switch Statement

let emoji = 'heart'

switch (emoji) {
    
    case 'sad':
        console.log('very sad')
        break

    case 'heart':
        console.log('very happy')
        break

    case 'smile':
        console.log('very  very happy')
        break

    case 'happy face':
            console.log('yellow happy')
            break
    
}


















