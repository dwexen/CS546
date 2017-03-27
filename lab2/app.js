/*
 * Matthew Colozzo
 * "I pledge my honor that I have abided by the Stevens Honor System"
 */
const todo = require("./todo");
const uuid = require("node-uuid");
const stor = require("./storage");

let derp = todo.createTask("Herp","Derp");

console.log(derp);
todo.completeTask(derp);
console.log(derp);

console.log(stor.set("Beans", 55));
stor.set("Beans", 56);
stor.set("Boofs", 44);
console.log(stor.get("Beans"));
console.log(stor.get("Boofs"));
stor.unset("Beans");
//stor.unset("Beans");
//stor.get("Beans");
console.log(stor.get("Boofs"));
stor.set("Gaffs",{Goofs: 1});
stor.set("Garters", "Anna");
console.log(stor.get("Garters"));
//stor.get("Beans");
//stor.get();
