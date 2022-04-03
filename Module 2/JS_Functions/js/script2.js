//traditional function
let a = 10;
let b = 20;
let c = 30;

//traditional functions
function sum() {
    const c = a + b + 3;
    console.log(c);
    return a + b;
}

console.log(sum());

//arrow function
const fn = () => {
    console.log(a + b + c);
}
fn();

//pure function
function pure_sum() {
    return a + b + c;
}

//impure function
function impure_sum(c) {
    return a + c;
}

console.log(impure_sum(1));
a = 15;
console.log(impure_sum(1));
