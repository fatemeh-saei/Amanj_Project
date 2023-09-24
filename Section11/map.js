const friends = [
    {name:"Fatemeh", nickname:"Fati"},
    {name:"Fereshteh", nickname:"MS Feri"},
    {name:"Farzaneh", nickname:"Fari"},
    {name:"Nazanin", nickname:"MS Nazi"},
    {name:"Pouria", nickname:"MR Pouri"},
];

//const nicknames = friends.map(s => s.nickname + " Jan");
//const nicknames = friends.map(s => `${s.nickname} Joon`);
//console.log(nicknames);

const MS = friends.filter(friend => {
    return friend.nickname.includes("MS");
})

//const ms = friends.filter(friend => friend.nickname[0] === ("F"));
const ms = friends.filter(friend => friend.nickname.startsWith("F"));

console.log(MS);
console.log(ms);
