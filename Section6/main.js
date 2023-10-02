
function doSomething(name, lastName){
    console.log("hi" , name, lastName?lastName:"");
}
function add(a, b) {
    let c = a + b;
    return c;
}

doSomething("fatemeh", "saei");
doSomething("farah");
let result = add(5, 7);
console.log("result for function add:" , result);


const person = {
    name: "ali",
    lastName: "mohammadi",
    score: 20,
    printScore: function printScore(){
        console.log("Salam", this.score);
    },
    addScore: function addScore(){
        this.score += 1;
    }
}

// person.printScore();
person.addScore();
person.printScore();