/**
 * Greet a person by name.
 * @param {string} name - The name to greet. Defaults to "World".
 */
function greet(name = "World") {
    console.log(`Hello, ${name}!`);
}
module.exports = greet;