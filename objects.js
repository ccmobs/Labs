const mixedFruit = [
    'apples',
    'oranges',
    'pears',
    'bananas',
    ['tomato', 'avocado', 'peanut']
];

/* object key/value pairs */
// const fruits = {
//     fruit1: 'I like apples',
//     fruit2: ' I like tomatos'
// };

/* dot notation to retieve object properties */
//console.log(fruits.fruit_yes);

/* add to an object */
// fruits.fruit3 = 'I like pineapples';
// fruits['fruits4'] = 'I like grapefuit';
// console.log(fruits);

/* writing properties for objects */
const multifruits = {
    apples: 'Red',
    pears: 'Green'
};
console.log(multifruits);

multifruits.calcfruit = 12;

console.log(multifruits.calcfruit);

const mobley = {
    firstName: 'Chris',
    lastName: 'Mobley',
    birthYeah: 1957,
    job: 'designer, creator',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    //make a method property
    calcAge: function (birthYear) {
      return 2022 - birthYear;
    }
    };
  console.log(mobley.calcAge(1957));

/* bracket notation (expressions) and object data retrieval */
// const myFavFruit = prompt('Do you like tomatos or apples? Choose fruit1 for apples or fruit2 for tomatos.');
// console.log(fruits[myFavFruit]);
