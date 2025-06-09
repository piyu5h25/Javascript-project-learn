var a;
//1.  word vs keyword
// word: me, you, kutta
//  keyword: var, let, const, if, else, for, while, do, while, switch, case, break, continue, return, try, catch, throw, finally, class, function, 

// 2.variables and constants
const dulha = "salman";
var dulhan = "kareena";
var ex = "haramzada"
//  to haramzada kahin shadi ke card me change na krde isliye dulhe ko const kr dete hai

// 3. hoisting: variable ko upar se call kr skte hai .variable of declaration is done first and then initialization is done.
console.log(a);
a = 10;

// 4. types in js
// primitive and reference
// primitives = number, string, boolean, null, undefined, symbol
// reference = [](){} // aisi koi value jisko copy krne pr uska real copy nahi hota balki us main value ka reference pass hojata hai usse reference value kehte hai. aur jiska real copy hojaye usse primitive value kehte hai.    

var a = [1,2,3,4,5];
var b = a;
b.pop();
console.log(a);
console.log(b);

// 5. conditionals- if else, else-if
// jab bhi baat agar magar par ayegi, ya fir aisa kro waisa kro tb conditionals hote hai
// if(true) or if(false)
// if(12>10) or if(12<10)
if(false){
    console.log("ye nhi chalega");
}
else{
    console.log("ye chalega"); // ye chalega kyu ki false nhi hai
}
//  if(){
// }
// else if(){

// }
// else if(){

// }
// else{

// }

// 6. loops: ka matlab repeat
//  1 1 1 1 1 1 1 1 1 
//  1 2 3 4 5 6 7 8 9  ye dono hi loop hai: dono me print repeat horha hai.
//  for(let i = 0; i < 10; i++){
//     console.log(i);
//  }

// 7. functions: ye kisi bhi code ke block ke ek naam de diya. 
// like humne koi code likha aur usko kuch naam de diya ab usko kabhi bhi chla sakte hai.
// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2));
// console.log(add(1,2));

// three kaam ke liye:
// a. jb code kko turant na chlana ho .
// b. code ko reuse kr skte hai  like thermometer 
// c. code ko differrent val ke liye chla skte hai


//  8. arguments and parameters
// arguments: jo bhi value jo hum dete  hai functions ke andar usko arguments kehte hai.
// parameters:variable jinme value store hoti hai.
// function add(a,b){
//     return a+b;
// }
//  a and b are parameters
// console.log(add(1,2));



