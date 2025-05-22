import charCount from "./strings/charCount.js";
import { propertyOrder } from "./utilities/concepts.js"

import { isSame } from "./utilities/arrays/isSame.js";

//console.log(charCount(123));

//propertyOrder();

let arr1 = [1, 1, 2, 4]; // [1, 1, 1, 2, 4];
let arr2 = [1, 1, 4, 16];//, 20]; // [1, 1, 1, 4, 16, 20];
console.log(isSame(arr1, arr2));