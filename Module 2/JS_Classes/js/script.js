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

const p1 = new Player("Kimio", 24)
const p2 = new Player("Mary", 23)
console.log(p1)
console.log("p1 name:",p1.getName())
console.log(p2)
console.log("p2 name:",p2.getName())


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


