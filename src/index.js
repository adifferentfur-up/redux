import {compose, pipe} from "lodash/fp";
let input ="   javascript  ";

const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const wrap = type => str => `<${type}>${str}</$type>`;

const transform = pipe(trim, toLower, wrap("span"));

console.log(transform(input));
