//>>> static typing example

// const message = "hello world!";
// message();

//>>> Ts by default does not change Js runtime behaviour example

// const message = "hello world!";
// message();
//tsc --noEmitOnError demo2.ts

//>>> behaviour for object property access
// const similarwebber = {
//     name: "Daniel",
//     age: 35, // just a guess :)
// };
// user.favoriteFood; // returns undefined

// >>> structural typing example
interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point1 = { x: 12, y: 26, hello: "there" };
logPoint(point1);
