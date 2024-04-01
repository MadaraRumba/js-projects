// parent class or superclass

class Pizza {
    crust = 'original';
    #sauce = 'traditional';
    #size;

    constructor(pizzaSize) {
        this.#size = pizzaSize; // private properties
        this.crust = 'original';
    }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)
    }
}

const myPizza = new Pizza('large');
myPizza.hereYouGo();

console.log(myPizza.getCrust());
console.log(myPizza.#sauce);

/*
// child class
class SpecialityPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize) // super keyword has to be used before we can ever use the keyword "this"
        this.type = 'The Works';
    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
    }
}

const mySpecialty = new SpecialityPizza('medium');
mySpecialty.slice();
*/


// Factory Function - another way to create an object;

// function pizzaFactory(pizzaSize) {
//     const crust = 'original';
//     const size = pizzaSize
//
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     };
// }
//
// const myPizza = pizzaFactory('small');
// myPizza.bake();