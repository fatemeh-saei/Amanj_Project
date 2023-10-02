const firstName = ["Fatemeh", "Farah", "Sajjad"];
const lastName = ["Saei", "Mahari", "Soltanian"];
const fullname = [...firstName, ...lastName];

//console.log(fullname);
//console.log(fullname.concat("Fereshteh"));

firstName.push(...lastName);
console.log(...firstName);

