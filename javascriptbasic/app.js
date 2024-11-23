// D-1

//JS case sensitive

// =>Variable

// let name = "mgmg";//string
// let age = 23;//number -> integer
// let price = 999.99;//number -> float
// let isMarried = true;//boolean
// let cup = null;//null
// let box;//undefined

// ------------------------------------------------------------------------

// expression vs statement

//  100-20 (expression) vs let a = 100 - 20 (statement)

// ------------------------------------------------------------------------

//Operator

// +,-,*,/,%,** (Arithmatic Operator -> value)
// console.log(2 ** 4);//2 * 2 * 2 * 2 = 16 (power)
//comparison -> boolean (true / false)
// (>,<,==,!=,>=,<=) (===)

// ------------------------------------------------------------------------

// = == === 

// = (assigment operator) 
// let name = "Karak Chan"
// == (equal to)
// console.log(name == "Karak Chan")
// console.log(2 == "2"); //not same data type, but same value ->true 
// console.log(2 === "2"); //not same data type, but same value ->false

// ------------------------------------------------------------------------

//operator precedence (go to bottom web operator precedence )
// console.log(10 * 5 + 4 - 2);

// ------------------------------------------------------------------------

// increment and decrement
// let a = 10; //increment
// a = a+1; //increment  a = a -5;   //decrement
// a ++; //increment     a --;   //decrement
// a +=1; //increment    a -=3;   //decrement
// console.log(a)

// ------------------------------------------------------------------------

//Logical Operator
let name = "min min";
let age = 23;
//giveaway iphone 15 promax
//condition (a person who is 18 or older and has name should include mg)
//or (at least one must be true -> true)
//and (all condition must be true -> true)
//not
console.log(!(age >= 18 && name.includes("min min")));

// ------------------------------------------------------------------------

// D - 2
// D - 2 Continus

let twice = function(x,modifier){
    let result = modifier(x);
    return result * 2;
}

let result = twice(250, function(x){
    return x - 200;
});

console.log(result);

// ------------------------------------------------------------------------

// => arrow function
let sum = (a,b)=> a+b

console.log(sum(2,3)) //5

// ------------------------------------------------------------------------

// => array 

let names = ['kyaw kayw','su su','nu nu',
    [
        "index catch"
    ]
];

// // names[1] = "aye aye";
// names.push = "khin khin";
// console.log(names[names.length - 1]);
console.log(names);
console.log(names[3][0]);




//hello