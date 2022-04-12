class Car {
    manufacturer = ""
    model = ""
    hp = 0
    
    constructor(manufacturer, model) {
        this.manufacturer = manufacturer
        this.model = model
        this.hp = Math.random() * 700
        console.log(this)
    }

    getModel() {
        return this.model
    }

    setModel(newModel) {
        this.model = newModel
    }

    getManufacturer() {
        return this.manufacturer
    }

    setManufacturer(newManufacturer) {
        this.manufacturer = newManufacturer
    } 

    getHP() {
        return this.hp
    }

}

function dragRace(car1, car2) {
    console.log("Drag race between", car1.getModel(), "and", car2.getModel(),"!")
    if(car1.getHP() > car2.getHP()) {
        console.log(car1.getModel(), "has more hp than", car2.getModel())
    } else if(car1.getHP() < car2.getHP()) {
        console.log(car2.getModel(), "has more hp than", car1.getModel())
    } else {
        console.log("both cars have the same ammount of horsepower")
    }
}

const c1 = new Car("Ferrari", "812")
const c2 = new Car("Lamborghini", "Aventador SVJ")

console.log(dragRace(c1, c2))