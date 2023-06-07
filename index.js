const moi = require("./information");

let cowsay = require("cowsay");
console.log(cowsay.say({
    "text": moi.name,
    "e": "$$",
    "T": "W"
}));