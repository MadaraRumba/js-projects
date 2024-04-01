/*
const myObj = {
    name: 'Madara'
};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ['Eat', 'Sleep', 'Code'],
    beverage: {
        morning: 'Coffee',
        afternoon: 'Iced tea'
    },
    action: function () {
        return `Time for ${this.beverage.morning}`; // template literals
    } // methods are functions defined within objects
}

console.log(myObj.name);
console.log(anotherObj.hobbies[0]); // dot notation
console.log(anotherObj['beverage']); // bracket notation
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

 */

/*

const vehicle = {
    wheels: 4, engine: function () {
        return 'Vrooom!'
    }
}

const car = Object.create(vehicle);

car.doors = 4;
car.engine = function () {
    return 'Whoosh!'
}

console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);

 */

/*
const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham'
};

/*
// adding properties or methods
band.keyboards = '';
band.start = function () {
};
*/

/*
// removing properties or methods
delete band.drums;

console.log(band.hasOwnProperty('drums'));


console.log(Object.keys(band));
console.log(Object.values(band));

// for... in loop
for (let job in band) {
    // console.log(band[job]); // not using dot notation because then it would look for specific value
    console.log(`On ${job} it's ${band[job]}!`) // accessing values from the key position and from the value position by using for.. in loop.
}

//destructuring objects

const {guitar: myVariable, bass: myBass} = band; // defining variables from object
console.log(myVariable);
console.log(myBass);

function sings({vocals}) {
    return `${vocals} sings!`
}

console.log(sings(band));


 */
