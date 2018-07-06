var chalk = require("chalk");

var message = "Hello " + chalk.yellow.bold.underline.bgBlue("World");
console.log(message);