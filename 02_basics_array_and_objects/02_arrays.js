const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

console.log(marvel_heros[3][1]); // Flash bcz  [ 'Superman', 'Flash', 'Batman' ] 3 here 3 of 1 is Flash

marvel_heros.concat(dc_heros)
console.log(marvel_heros);  // [ 'Thor', 'Ironman', 'Spiderman' ]

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
 
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const real_ano_arry = another_array.flat(Infinity)
console.log(real_ano_arry); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9 ]


console.log(Array.isArray("Abhishek")); // false

console.log(Array.from("Abhishek")); // [ 'A', 'b', 'h', 'i', 's', 'h', 'e', 'k' ]

console.log(Array.from({name:"Abhi"})) // [] - important topic

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1,num2,num3)); // [ 100, 200, 300 ]