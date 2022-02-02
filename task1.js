`use strict`;

let DarthVader = new Object();

DarthVader.allegiance = "Empire";
DarthVader.Weapon = "Lightsabre";
DarthVader.sith = true;
DarthVader.Jedi = false;

// let darthVader = {
//     allegiance: "Empire",
//     weapon: "lightsaber",
//     sith: true
//     jedi: false
// };

// console.log(darthVader);


console.log(`Darth Vaders allegience is to the ${DarthVader.allegiance}`);
console.log(`Darth Vaders weapon of choice is a ${DarthVader.Weapon}`);
console.log(`Darth Vader is a Sith? ${DarthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${DarthVader.Jedi}`);


let myarray = [
    "Hello", "Everyone"
];
console.log(myarray.length)

myarray.push("my","name","is","slim","shady");

console.log(myarray.length);

myarray.shift()

console.log(myarray)

for ( let x of myarray ) {
    console.log(x);
  } 
