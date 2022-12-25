// dynamic typing example

const message = "hello world!";
message();

//Those cases come up because the ECMAScript specification has explicit instructions on how
// the language should behave when it runs into something unexpected.
// Reagarding the previous example, the specification says that trying to call something that
// isn’t callable should throw an error, but for undefined properties ....

// behaviour for object property access
const similarwebber = {
    name: "Daniel",
    age: 35, // just a guess :)
};
user.favoriteFood; // returns undefined
