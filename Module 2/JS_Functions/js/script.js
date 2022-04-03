let a = 1;
let b = 2;

//traditional functions
function sum() {
    const c = a + b + 3;
    console.log(c);
    return a + b;
}

const res = sum();
console.log(res);

//arrow functions
const fn = () => {
    console.log("hello");
}

fn();

//pure and impure functions

//pure
//all arguments and variables are defined within the scope of 
//the function
function pure_sum(a, b) {
    return a + b;
}

console.log(pure_sum(1, 2));
console.log(pure_sum(1, 2));
console.log(pure_sum(1, 2));
console.log(pure_sum(1, 2));
console.log(pure_sum(1, 2));



//impure
//not all variables are defined within the scope of the function
function impure_sum(c) {
    return a + c;
}

console.log(impure_sum(3));
console.log(impure_sum(3));
console.log(impure_sum(3));
console.log(impure_sum(3));
a = 10;
console.log(impure_sum(3));
console.log(impure_sum(3));
console.log(impure_sum(3));
console.log(impure_sum(3));





