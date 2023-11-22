import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;

/*first evidance of js is weired*/ 
("b"+"a" + +"a" + "a").toLowerCase() // banana

2 + "2" + 2 // 222 (concatinate)
2 + "2" - 2 // -> (2 + "0") -> 20 


/* YOU CAN RUN THIS CODE IN VS CODE FOR BETTER EXPERIENCE */ 

/*
          Disclaimer
 Don't do it in professional context
*/


/* we are trying to generate obfuscated (unclear) JavaScript code that represents different characters */ 

/* what if I told you. You can write a 
prefectely valid js using only following
characters ({[/>+!-=\]}) not only that we 
can also write a compiler that takes a 
regular js and turn it into weired version 
like this ({[/>+!-=\]})=\]})({[/>+!
*/ 
/*
  ({[/>+!-=\]})=\]})({[/>+!
  )=\]})({[/>+)=\]})({[/>+!
  +!-=\]}!=\]+)=\]}]})=[>+!

*/

// and we will only you these chracters in this guide

/* this is exactly we are goona do today */ 
/* so the basic idea is js only have few 
types string, number, boolean Arrays, Object*/ 

/* so when you try to add two different types
js have some rules that can coerecion(enforce)
to convert type into another so that it can 
perform operation on them */ 

// "a" + 0 => "a0" number coerced into string
// true + 0 => "a0" boolean coerced into number (true = 1, false = 0)
// we can convert the expression into number just by adding a (+) or (-) infront of it
// +[] => 0 convert array into number
// +true => 1 convert boolean into number


// lets convert above chracters into number

const zero = "+[]" // 0 (store in a string we can referance later)
const one = "+!![]" // 1 (![]=false -> !![]=true -> +!![]=1)
// now we can create any number from it 
const two = one + one // 2 (we can add this to infinity)

/*this function will convert any number into symbols format */
const number = n => n === 0 ? zero : Array.from({length:n}, ()=>one).join(" + ") 
number(0) // 4


// now we can create any number into these weired sequence
// now our goal is to get the following letter fromChadetSigncup[space][backslash]
// we need these character cuz if we have these we can encode any thing in js

const map = {}

map.a = `(+{}+[])[${number(1)}]` /* => a (+{} will convert NaN and when we want to convert any thing 
  into string we just simply need to add empty array into it) now we just need to extract a from NaN
  for that we need to get a by passing the a index
  empty string cerced to convert into string*/


/*this function will generate a symbol sequence from string */ 
function fromString  (s)  {
  /*  if we don't have a string then we get undefined that's not good
  if we don't have a key that is not defined yet then it should produce that string
  */
 return s.split("").map(x=>{
  if(!(x in map)){
    // charCodeAt returns the letter Code (i.g q = 113)
    const charCode = x.charCodeAt(0)
    /*  let's see how this is working 
    first of all we make a string ([]+[]) then we get string constructor 
    with bracket notation and on string constructor we have a method 
    of fromCharCode (which converts a character code into its character)
    and at last in the prenthses we pass the characterCode
    it pretty much working like this (i.g q = 113)
    "".constructor.fromCharCode(113)
    */
    return `([]+[])[${fromString("constructor")}][${fromString("fromCharCode")}](${number(charCode)})`
  }
  return  map[x]
  }).join("+")
}

// now we need other character for that we will use [Object Object] if we add [] and {} output will be [Object Object]
map.b = `({}+[])[${number(2)}]`// [Object Object]
map.o = `({}+[])[${number(1)}]`// [Object Object]
map.e = `({}+[])[${number(4)}]`// [Object Object]
map.c = `({}+[])[${number(5)}]`// [Object Object]
map.t = `({}+[])[${number(6)}]`// [Object Object]
map[" "] = `({}+[])[${number(7)}]` // [Object Object]
map.f = `(![]+[])[${number(0)}]` // false
map.s = `(![]+[])[${number(3)}]` // false 
map.r = `(!![]+[])[${number(1)}]`// true 
map.u = `(!![]+[])[${number(2)}]`// true 
// now get i and n from Infinity for that we divide non-zero number to zero
map.i = `((+!![]/+[])+[])[${number(3)}]`
map.n = `((+!![]/+[])+[])[${number(1)}]`
/*  as we know that everthing in js is an object and there are some built-in methods on them
so we will gonna use them with the help of alphabets stored in map object */

/* the first part []+ is used to convert js function into string */
map.S = `([]+([]+[])[${fromString("constructor")}])[${number(9)}]` 
map.g = `([]+([]+[])[${fromString("constructor")}])[${number(14)}]` 
map.p = `([]+(/-/)[${fromString("constructor")}])[${number(14)}]`

/*  we are adding a two backslashes cuz that's because the 
two backslashes are interpreted as a single, literal backslash
and so in regex we where we use 4 backslashes cuz the second slash 
escaped the first one and 4th one escaped the 3rd one that's how 
we get 4 slashes and it will be converted into two slashes in the 
string format then then there the second slash escaped the first one 
and at last we only get single slash

            what copilot says 

To get a literal backslash from a string using a regular expression
in JavaScript, you would use the pattern \\\\. This is because the 
backslash (\) is an escape character in JavaScript, so to represent 
a literal backslash, you need to escape it with another backslash (\\). 
However, in a regular expression, the backslash is also an escape 
character, so you need to escape each backslash again, resulting 
in four backslashes (\\\\).


let str = "This is a string with a backslash \\ in it.";
let regex = /\\\\/;
let match = str.match(regex);
console.log(match); // ["\\"]
*/
map['\\'] = `(/\\\\/+[])[${number(1)}]`

// mChd left characters

/*  we are not going to find this characters like the previous way
toString() method is quite intresting cuz it take an extra argument 
to which base the number will converted into so we will gona use 
base-16 hexadecimal number system it will convert the 13 into d
and if you notice we are using the () after the [] bracket cuz
by doing this we are passing the 16 as an argument
*/
map.d = `(${number(13)})[${fromString("toString")}](${number(16)})`
map.h = `(${number(17)})[${fromString("toString")}](${number(18)})`
map.m = `(${number(22)})[${fromString("toString")}](${number(23)})`

/*what i understand from this is that first we create an empty function 
then call its constructor method which gives us the main 
constructor-function (Function) 
(for more about Function constructor :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function).
where we are passing return escape as a string is just like a 
function returning built-in global escape method and that escape method accpets a 
escape sequence which results in %5C from that we get the C letter

simple form
((()=>{})[("constructor")](("return escape"))()(map["\\"]))[2]
 */ 

/*  first we get the funciton constructor like this (()=>{})["constructor"] it's just
like how we get the property of an object using dot(.) notation

const x = new Function("return escape")
console.log(x)

console.log(x()(map["\\"])[9])
*/

map.C = `((()=>{})[${fromString("constructor")}](${fromString("return escape")})()(${map["\\"]}))[${number(2)}]`
/* how it looks like 
((()=>{})["constructor"]("return escape")()(map["\\"]))[2]
*/ 

/*if wer done with the adding characters in map we just need a function 
that can take any code and converts into weired looking js code (symbol code or obfuscated js code)*/ 

fromString("Z") // long weired looking code of letter Z

/*  let's test this compiler funciton in vs code here it might not be run */
const compiler = code => `(()=>{})[${fromString("constructor")}](${fromString(code)})`

console.log(compiler("console.log('Hello from weired js')")) // this will be converted and written in output.js file with the comman (node currentFile.js > fileYouWantToGenerate.js) node index.js > output.js


