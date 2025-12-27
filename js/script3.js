//                                                      ||          DAY - 35       ||

// // infinite loop
// let attempt = 0;
// let "stop" = false ;
// let sahipass= "mohit";

// let password= prompt(`enter your password`);
// attempt++;

// if(password === sahipass) "stop" = true ;

// // while(sahipass !== password){
// //     if(attempt === 3){
// //         console.log(`ACCOUNT LOCKED`)
// //         break;
// //     }
// //     password = prompt(`enter your password`);
// //     if(sahipass === password) "stop" = true; }
// //         attempt++;   
// // }
// // if "stop" === true) console.log("ACCOUNT UNLOCKED ") 

// while( attempt<3 && sahipass!== password){
//     password = prompt(`enter password`)
//     attempt++;
// }
// if(attempt === 3 && sahipass!== password){
//     console.error(`ACCOUNT LOCKED`)
// }
// else console.log(`DONE`)



//12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// let  ask = prompt(`ENTER ANY WORD `);
// let  count = 0;

// while(ask !== "stop"){
//     if(ask === "yes")count ++; 
//     ask = (prompt(`ENTER ANY WORD `));
// }
// console.log(`yes typed no.vof time is ${count}`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         console.log(i)
//     }
// }

// // 14. Sum of all odd numbers from 1 to 30
// // Add only odd numbers. Print final sum.
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         // sum = sum + something;
//         sum = sum + i;
//     }
// }
// console.log(sum);


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// let my =0;
// let ask = Number(prompt("enter any no."))
// while(my !== ask%2){
//     ask = Number(prompt("enter any no."));
// }
// orr chat gpt 
// let go;
// while (true) {
//     go = Number(prompt(`enter any no.`))
//     if (isNaN(go)) {
//         console.log(`enter no. only`, go);
//         break;
//     }
//     if (go % 2 === 0) {
//         console.log(`entered even no.`, go);
//         break;
//     }
// else  odd keep repeating
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// let x = 17;
// // let x = Number(prompt(`enter the any numbric value `))
// let y = 37;
// // let y = Number(prompt(`enter the any numbric value `))
// for(++x; x<y; x++){
//     console.log(x);
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// count =0;
// for(let i =1 ; i<=20; i++){

//     if(i%2 !==  0 ){
//         console.log(i)
//     }
//     if( count === 4) break;
//     count++; 
// }
// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// {
//     let count = 0;
//     let i = 0;
//     // let ask = Number(prompt(`write any no.`))
//     //  if(ask>0) count++;
//     while (i < 5) {
//         let ask = Number(prompt(`write any no.`))
//         if (ask > 0) count++;
//         i++;
//     }
//     console.log(count)
// }
// orr
// let count=0;
// for(let i=1; i<6 ; i++){
//     let num = +prompt("give no.")
//     if(num>=0) count++;
// }
// console.log(count)


//                                                      ||          DAY - 36       ||
// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
// let balance = 1000;
// let count = 0;
// let flag = false;
// while (balance > 0 && count < 3) {
//     let withdraw = +prompt(`enter the amount`);
//     count++;
//     if (withdraw <= balance) {
//         balance -= withdraw;
//         console.log(`REMANING BALANCE : ${balance}`);
//     }
//     else {
//         flag = true;
//         break;
//     }
// }
// if (flag === true) {
//     console.log(`INSUFFICIENT BALANCE `)
// }
// console.log(`FINAL BALANCE : ${balance}`)

//do{
//       code       }
//while()

//RECURSION --> FUNCTION CALLING FINCTION ITSELF
// function AB(){
//     console.log(`hey `);
//     AB();
// }
// AB(); // ERROR -->Maximum call stack size exceeded , so we have to stop this
// function ab(n){
//     if(n===0) return;
//     console.log(n);
//     ab(n-1);
// }
// ab(5);

//  FUNCTION IN JS 
function dosomething(name , age , email) { //parameters
    // console.log(name, email, age)
    console.log(arguments[1])// targeting specific array 
    console.log(arguments); // argument objects  here , argument is the key word from which we can acess all passed arguments 
}
dosomething(`mohit`, 22, `mohit@gmail.com`)// arguments
// function hoisting anf variable hoisting 
Ab();// can be accessed and hoisted AND HAVE EARLY ACESS
function Ab(){
    // can be hoisted 
}

// bb() //CANT DO HOISTING EARLY EXCESS
var bb = function(){
    // cant do hoisting 
}

//                                                      ||          DAY - 37       ||
// parameters 4 types
// REST PARAMETER
AB(1,2,3,4,5,6,7,8,9);
function AB(a,b,...c){
 // 1 to a and 2 to b and rest wale arguments sab c array m chale jayange
 console.log(a,b,c)
}
function yy(...D){
 //  sab D array m chale jayange
 console.log(a,b,c)
}
// parameterized parameter
function abcd(a,b,c,d){// parametrized parameters
 console.log(a,b,c,d)
}
abcd()//if argument is not passed so all values is undefined 

// destructured parameters --> used in object and array
function vvv(obj){ 
// function vvv({name,age}){ // direct acess
console.log(obj)
console.log(obj.name)
    // console.log(name,age)// directly acess
}
vvv({name:`mohit`, age:15})
// default parameter
function gg (a=0,b=0,c=0){
    console.log(a,b,c)
}
gg(1,2)

// AGRUMENTS 3 TYPES --> positional , default , spread
// positional arguments
function abcde(a,b,c,d){
 console.log(a,b,c,d)
}
abcde(1,2,null,4);// all arguments must be fill can also be null but cant blank or undefined 
// default is as same as previous 
// spread arguments 
function ff(a,b,c,d){
 console.log(a,b,c,d)
}
let agg = [1,2,3,4]
ff(...agg)

// CLASSIC FUNCTION
function jj(){}
jj()
// NESTED FUNCTION
function kkg(){
    let a; // scope chain eg . tis can be acessed within the function kk scopes 
    function hh(){
        console.log(`hh function bhi chala`)
    }
    hh();
}
kkg();
//  SCOPE CHAIN --> above eg . is present  
// UNDERSTANDING IMIDIATE  AUTOMATICALLY INVECKED FUNCTION EXPRESION (IIFE) --> use to make private procted variables cant be acessed by anyone
(function(){
   let money = 20000; // private protected varible 
})();

// ARROW FUNCTION OR  FAT ARROW FUNCTION ()=>{}
    // must stored in an variable
    let lol=()=>{
        console.log(`hey hey hey `)
    }
    lol();
// ANAMOUS FUNCTION -->jiska koi namm he naaa hoo
// function(){}

// HIGHER ORDER FUNCTION (used in for each loop)--> ak asa function joo ke return kar de ak or function YAAA TOO vo ak or function accpet kar le parameter m
function qq(){ // here qq is higher order function 
    return function(){}
} 
function dd(a) { // then dd is higher order function because 'a' parameter m function jaa raha hai
    
}
dd(function(){}) // HERE THIS IS CALL BACK FUNCTION

//  FIRST CLASS FUNCTION(FCF)--> hawa (it is an concept only) --> function us programming language m variable k thara use ho sakte hai
function zz(a,b){

} 
zz(function(){},2)// yaha functions bhi likh sakte hai or varibles bhi


//                                                      ||          DAY - 38       ||

