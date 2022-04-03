class Player {
    name = ""
    age = 20
    hp = 0
    dmg = 0
    constructor(name, age) {
        this.name = name
        this.age = age
        this.hp = Math.random() * 100
    }

    getName() {
        return this.name
    }
}

const p1 = new Player("John", 24)
const p2 = new Player("Mary", 23)
console.log(p1)
console.log("p1 name:",p1.getName())
console.log(p2)
console.log("p2 name:",p2.getName())


const arr = ["a", 1, "b", 2, "c", 3];
console.log("length of arr =", arr.length);

//for loops
console.log("for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "]:", arr[i]);
}

//while loop
console.log("while loop:");
let i = 0;
while(i<10) {
    console.log("[i]...", i);
    i++;
}


//timeouts
// console.log("timeout demo (one console.log each second for 10s)");
const SECOND = 1000;
let a = 0;
const fn = () => {
    console.log("hey", a);
    a++;
    if(a < 10) {
        setTimeout(fn, SECOND);
    } else {
        console.log("finished");
    }
    
}

//fn();


const fn2 = () => {
    console.log("hey", a);
    a++;
    if(a > 4) {
       clearInterval(interval);
    }
}
// const interval = setInterval(fn2, SECOND);

const fn3 = () => {
    const date = new Date();
    console.log(date);
}
setInterval(fn3, SECOND);























// function OldPlayer(name, age) {
//     this.name = name
//     this.age = age

//     this.getName = function() {
//         return this.name
//     }

//     console.log("->", this)
// }

// const op1 = new OldPlayer("John", 20)
// console.log(op1)
// const op2 = new OldPlayer("Mary", 24)
// console.log(op2)


