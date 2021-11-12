//GIVEN THIS FUNCTION:

// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

//Refactor it to use the rest operator & an arrow function:

const filterOutOdds = (...nums) => {
    return [...nums].filter((num) => num % 2 !== 0);
}


//FIND MIN
//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

//Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...nums) => {
    return Math.min(...nums);
}


//MERGE OBJECTS
//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    return newObj;
}


//DOUBLE AND RETURN ARGS
//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...nums) => {
    const doublesArr = nums.map(num => {
        return num * 2;
    })
    newArr = [...arr, ...doublesArr];
    return newArr;
}



//Slice and Dice!
//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

//Make sure that you are always returning a new array or object and not modifying the existing inputs.


/** remove a random element in the items array
and return a new array without that item. */

//([1,2,3,4,5,6,7,8,9])

const removeRandom = items => {
    let randomIndex = Math.floor(Math.random() * items.length);
    // console.log(randomIndex);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}


/** Return a new array with every item in array1 and array2. */

//([1,2,3,4,5], [6,7,8,9])

const extend = (array1, array2) => {
    return [...array1, ...array2];
}


/** Return a new object with all the keys and values
from obj and a new key/value pair */

//({1:'a', 2:'b', 3:'c', 4:'d'}, 5, 'e')

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

// const addKeyVal = (obj, key, val) => {
//     return {...obj, [key]: val};
// }



/** Return a new object with a key removed. */

//({1:'a', 2:'b', 3:'c', 4:'d'}, 4)

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

//({1:'a', 2:'b', 3:'c', 4:'d'}, {5:'f', 6:'g', 7:'h'})

function combine(obj1, obj2) {
    let newObj = {...obj1, ...obj2};
    return newObj;
}



/** Return a new object with a modified key and value. */

//({1:'a', 2:'b', 3:'c', 4:'d'}, 3, 'x')

function update(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
