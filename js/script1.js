// scripting language hai 
// animation , intraction , engagment
// alert()
var p = 2;
const b = 3;
// b=32;// error const cant be reasigned 
console.log("hello")
console.error("to give error ")
console.warn("to give warning in blue color ")
var v = "hello mohit mikki "
//       01234567
console.log(v.slice(1, 7))
// alert("hii")// dont work on terminal // ye sifif batata hai
// prompt("name please")// dont work on terminal // ye aapse puchta hai kuch
// `` back tick is called templet string/letrals
var s = "harsh bhai khana khaalo"
// console.log(s.split("a").join())
// console.log(s.split("a").join(1))
console.log(s.split("a").join(''))
console.log(s.includes("ha"))
// || JS - 2 || //
let a = 123;
console.log("hiiii")
console.info("hiiii") // kuch kuch browser m info k output m i ka sign aa jata hai
// orr vase log and info are same 
console.table({
    name: "mohit"
})

// let x =prompt("name please")
// console.log(x)
console.log(`this we are using templates ${10 / 2}`)
let m = "hiii hello"
console.log(m.replace('h', 'g'))
console.log(m.replaceAll('h', 'g'))



// || JS - 3 || //
let f = null // jab aapke password koi value nahi ho assign karne k liye 
let c = [10, "mohit "]
// NaN --> 12*"harsh" not possible 
// relative -->array , obj , function // inke value direct copy kar sakte hai 
var d = [10, 20, 30]
var q = d;
// referance value - array , obj , function (can't be copy directly ) 
//  premitive --> iske copy direct kar sakte hai 
// js m array bhi obj hota hai 
// null is obj
// datatype - data ka type hi hai data type 
//  harsh --> string
//  {} --> obj


// || JS - 4 || //
// prompt se jo bhi loge vo ak string ban jayega
// let age = prompt("enter the age")
// console.log( typeof age)
// to convert into in no.
// Number(age);// now age is in no.
// 0/0 in NaN
console.log("bhopal")
console.info("bohpal")
console.warn("bohpal")
console.error("bohpal")
// var z = prompt("enter a namr ");
// console.log( `hey ${z}`)
// no. appers as blue color always and srting as white and black color
// working with strings 
let msg = 'hello hiii jiii';
console.log(msg.slice(2, 6));
console.log(msg.split(``))
console.log(msg.replace(`hiii`, `rohit`))
let rr = "hiii";
console.log(`hii ${rr} mohit`)
console.log(msg.includes(`hiii`))// check the string using include function
console.log(msg.includes(`hooo`))
// expresion gives you value imidetially 
// statement is statement 


// special cases(values) 
// 0/0 is nan 
//  1/0 is infinity
// undefined +1 is nan
// Number(undefined) --> NAN
// Number(undefined+1) --> NAN
// Number(`abc`) is nan


// primitive value vs reference value 
let qq = 44;
let aa = qq;
qq += 3;// +3 addition
console.log(qq)
console.log(aa)

let mm = { name: `mohit` }
let yy = mm;
console.log(mm)
yy.name = `heloooo`
console.log(mm, yy)



//                                                                  ||       JS - 5         ||                               //
//  %
//  += , -= , %= , /= , *=
// == not strict compare never use this 
// === strict compare always use
// != check that both side are not equal never use this 
// !== always use this 
// && AND operator (*)
// || OR operator operator (+)
// !  NOT operator ulta karta hai ans ko true to false and false to true



//  typerof operator and instanceof oprator
let bjp = [33, 44];
console.log(bjp instanceof Array)
console.log(bjp instanceof Number)
// + concatation of strings / sring operator 
// SPREAD operator (...)used in obj and array
let jj = [10, 23, 66]
// let ii = jj --> is se reference value jayagi copy nahi hogi values 
let ii = [...jj]// iss se values copy hogi reference value nahi jaye ge 
console.log(jj, ii)
// REST oprator (...) used in functions
function abc(...arg) {
    //  here arg is an array
    // all passing in function is stored in this array
}
abc(12, 20, 33, 88, 99);
function bc(a, b, c, ...rest) {
    //  here rest is array 
    // 2 is stored in a , 22 in b , 55 in c and rest all passing in function is stored in this array
}
bc(2, 22, 55, 3, 75, 55);
//  nulllish coalish operator --> fall back only when null / undefined
//  23>24 ?? console.log("sorry") --> false 
//  null ?? console.log("sorry") --> sorry (it will always do run sorry becoz null is there)
let hh;
hh ?? console.log(`sorry`); // because hh is undefined 
//      optional chaning(?.) --> checks safy acess to nested valued 
let objq = {
    name: {
        first: `mohit`,
        second: {
            sf: `singh`,
            sl: `khinchi`
        }
    }
}
console.log(objq.name.first);// if there is no property of name then this will create error in program and stop us.
console.log(objq?.name?.first);// if there is no property of name then this will not make an error will running the code .(here in both case properties are present )
console.log(objq?.name?.third);// it will not occur error  
console.log(objq.rohit);// it will occur error  

//  variable hoisting --> variable ko banane se pahle usko acess karna result undefine aayega error nahi aayega .
// hoistig m appka variable 2 pats m tut jata hai 2parts m  
//  var dqd ; 1st part k\a decleration 
//  dqd =12 ; 2nd part k\a initiation
console.log(`variable hoisting`)
console.log(dqd)
var dqd = 12;
// let and const m hoisting nahi hoti -->kyuki usme uske upar wala tomporal dead zone hota hai 



//                                                                   ||      JS-6        ||                                                                          //
//  Q1. bitwise (Light intro):
//  evaluate 5 & 1 and 5 | 1.
// write the result and your observation (no deep explanation needed now ).

//  function hoisting --> it will run 
dd();
function dd() {
    console.log("calling")
}
//  this will not work because var divide into 2 parts so hmlo is undefined  and calling it will create an error 
// hmlo();
// var hmlo = function (){
//     console.log(`   var declear function`)
// }


//                                                                   ||      JS-7        ||                                                                          //
// for loop
// for(start ; end ; change){}
// print mohit 5 times 
for (let i = 1; i < 6; i++) {
    console.log(`mohit`)
}
//  printing 1 50 times (stright forward loop) and 1 to 50 counting (dynamic loop)
for (let i = 1; i < 51; i++) {
    console.log(i, `-->dynamic loop & 1 --> stright forward loop `)
}
// printing 20 to 27
for (let i = 20; i <= 27; i++) {
    console.log(`hii ${i} hello`)
}
// 30 to 10
for (let i = 30; i > 9; i--) {
    console.log(i)
}
// 121 t0 12
for (let i = 121; i > 11; i--) {
    console.log(i)
}
// 12 to 1 and 5, 7 are missing
for (let i = 12; i >= 1; i--) {
    if (i === 5 || i === 7) {
        continue;
    }
    else {
        console.log(i);
    }
}
for (let i = 12; i >= 1; i--) {
    if (i !== 5 && i !== 7) {
        // isme agar 7 i ke value hue to if nahi chalaga orr agae 2 hua to bhi anhi chalaga 
        console.log(i);
    }
}

//                                                                   ||      DAY - 33        ||                                                                          //
// print no. 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// print only even 1 to 20
// for(let i=1; i<=20; i++){
//     // if(i%2){}
//     // else console.log(i)
//     // or  both are correct 
//     if(i%2 === 0){
//         console.log(i , `oooo`)
//     }
// }
// orr we can doo 
for (let i = 2; i <= 20; i += 2) {
    console.log(i, `using another method`)
}
//  print 10 to 1 reverse
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// print yes 5 times 
for (let i = 0; i < 5; i++) {
    console.log(`yes`)
}
//  print wether the no. is even or odd from 1 to 10 
// if(i%2 !== 0){
// console.log(i,`odd `)
// }
for (let i = 1; i <= 10; i++) {
    if (i % 2) {
        console.log(i, `odd`)
    }
    else console.log(i, `even`)

}

//  ask user of a no. and print the no. is +ve or -ve
{
    // prompt se kuch bhi string m badal jata hai
    // let opP = Number(prompt(`enter any no.`)) ; // recomended in company 
    // let op = (prompt(`enter any no.`)) ;
    // op = Number(op); // we can use parsint here for conversion of sting into integer
    let op = -1585;
    if (op > 0) {
        console.log(`positive no. entered `, op)
    }
    else if (op === 0) {
        console.log(`entered value is neither +ve nor negitive it is = `, op)
    }
    else if (op < 0) {
        console.log(`entered -ve value that is `, op)
    }
    else console.log(`please enter any value`)
}
// PRINT MULPLICATION TABLE OF 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i * 5}`)
}
//  ELEGIBILITY FOR VOTING 
{
    //    let gg =  Number(prompt("enter your age ").trim)
    let gg = `hlo`;
    console.log(gg);// for cancel operation handlening 
    if (gg >= 18) console.log(`you are elegible for voting ${gg}`)
    else if (typeof gg.trim() === "") console.log(`you erntered nothing bsdk `)// for spacning many times and it is null handling   
    // else if (gg === null) console.log(`you enterd on cancel option`)
    else if (gg < 18) console.log(`you are not elidgeble for voting  --> ${gg}`)
    else if (gg === NaN) console.log(`please enter no. only `) // if characters are entered is chars is NaN   (character handling )
    else console.log(`hello`)
    // sir kar tarika 
    gg = Number(gg.trim());
    // if(isNaN(gg)){
    //     console.error(`plz enter no. only`)
    // }
    // else {
    //     console.log(`confirm ye no. hai `);
    // }
}


//  Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
{
    let count = 0; // for counting the variable outside the loop 
    for (let i = 1; i <= 15; i++) {
        if (i > 8) {
            ++count;
            console.log(i);
        }
    }
    console.log(`the total  count is`, count);
}

//  Ask user for passs and print access status
// Hardcoded correct passs. Compare with user input.
{
    let pas = "mohit"
    //  let password =prompt(`enter the passs`).trim
    let password = "mohit"
    if (password === null) {
        console.log(`you cancled `)
    }
    else {
        if (password === pas) {
            console.log(`matched`)
        }
        else console.log(`not matched`)
    }
}

//                                                        Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct passs
// If user gets it right early, stop. If not → “Account locked”

    let attempts = 0;
    let flag = false;
    let passs = "mohit";

    let password = prompt(`enter the passs`);
    attempts++;

    if (password === passs) flag = true;

    while (password !== passs) {
        if (attempts === 3) {
            console.log(`ACCOUNT LOCKED `);
            break;
        }
        password = (prompt(`enter the passs`).trim)
        if (password === passs) flag = true;
        attempts++;
    }
if (flag === true) console.log(`account unlocked`)
