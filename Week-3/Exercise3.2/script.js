// Example of Call method
// Call method help us to call a method with some other object data and method is stored in some differnet obj.

let person = {
    firstName: "Saurabh",
    lastName: "Kumar",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

let person2 = {
    firstName: "Krsna",
    lastName: "Kaul"
}

person.printFullName();
person.printFullName.call(person2);

// Example of Apply
// Apply is same as Call method just diff is it's accpet multiple argument in array.

let player = {
    firstName: "L",
    lastName: "Messi",
    printFullName: function (club, country) {
        console.log(this.firstName + ". " + this.lastName + " is from " + club + " and live in " + country);
    }
}

let player2 = {
    firstName: "C",
    lastName: "Ronaldo"
};

player.printFullName("Paris Sant German", "Argentina");
player.printFullName.apply(player2, ["Manuchester United", "Pourtagal"]);

// Example of Bind
// Bind is same as Call method, diff is it's not excute at time of calling it make a instance and we can store in variable and later on we can invoke it.

let myName = {
    firstName: "Saurabh",
    lastName: "Kumar",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

let rapperName = {
    firstName: "Krsna",
    lastName: "Kaul"
}

myName.printFullName();
let favRapperName = myName.printFullName.bind(rapperName);
favRapperName();