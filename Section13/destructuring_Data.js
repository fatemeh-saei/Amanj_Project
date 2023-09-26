const myName = "fatemeh dastmalchi saei";
console.log(myName.split(" "));

let [firstname, lastname] = "fatemeh dastmalchi saei".split(" ");
console.log(firstname, lastname);

let a, b, rest;
[a, b, ...rest] = [10, 30, 40, 60, 120, "fatemeh"];
console.log(a);
console.log(b);
console.log(rest);

let c, d, f;
[c, d, f = "hi"] = [10, 30];
console.log(f);


function print() {
    return [1, 2];
}
const [h, g] = print();
console.log(h); 
console.log(g); 

