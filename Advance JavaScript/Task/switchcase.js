// -------switchcase----------
console.log("------Switchacse------");

const animal = "Cat";

switch (animal) {
    case "Jaguar":
        console.log("Jaguar is danger");
        break;
    case "Dog":
        console.log("I like dog");
        break;
    case "Cat":
        console.log("Cat is pet");
        break;
    case "shark":
        console.log("Sharks are scary");
        break;
    default:
        console.log("Never heard of it");
}

// ------if else----------
console.log("-----if else-----");

const animal1 = "Shark";

if (animal1 === "Jaguar") {
    console.log("Jaguar is danger");
} else if (animal1 === "Dog") {
    console.log("I like dog");
} else if (animal1 === "Cat") {
    console.log("Cat is pet");
} else if (animal1 === "Shark") {
    console.log("Sharks are scary");
} else {
    console.log("Never heard of it");
}