// ----V1-----
it('17  and in Africa 17', () => {
   expect(17).toEqual(17);
});

it('18 it is not 17', () => {
   expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers =>
   numbers.filter(num => (num % 2 == 0));

it('Should get only even numbers from array', () =>{
   const result = getEvenNumbers([1, 2, 3, 4]);
   expect(result).toEqual([2, 4])
});

// ----V2-----

import getSum, {getSquaredNumbers, getOddNaumbers} from "./calculator.js";

it ('shoud get squared numbers', () =>{
   const result = getSquaredNumbers([1, 2, 3]);
   expect(result).toEqual([1, 4, 9]);
});

it ('shoud get odd numbers', () =>{
   const result = getOddNaumbers([1, 2, 3, 5, 7, 4]);
   expect(result).toEqual([1, 3, 5, 7]);
});

it ('get sum of numbers', () =>{
   const result = getSum(8, 4);
   expect(result).toEqual(12);
});

//node.js
//npm
//Jest (npm -g install jest)
//npm install -D @babel/core @babel/preset-env
//jest in console, for start testing code