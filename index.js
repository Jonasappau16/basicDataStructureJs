// We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.
let yourArray = ['string','one',false,true,1];


// In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Capital B";//i assigned the index of [1] which is the "b" to a string "Capital B"

// Only change code above this line
console.log(myArray);["a","Capital B","c","d"] //The new arrey index [1] takes the position of the original index[1] position ..


//Add Items to an Array with push() and unshift()

QUESTION// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, 'VIII', 9); //pushes (7, 'VIII', 9) to the end of the arra
   arr.unshift('I', 2, 'three');// adds ('I', 2, 'three') to the beginning of the function.
    // Only change code above this line
    return arr
  }
  
  console.log(mixedNumbers(['IV', 5, 'six',]));

  //Remove Items from an Array with pop() and shift()

 QUESTION //We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
 function popShift(arr) {
    let popped= arr.pop(); // Change this line this method removes the last array from the original arr(popShit) 'complete'
    let shifted= arr.shift(); // Change this line this method removes the first array from the original arr(popShift)
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  //Remove Items Using splice()
  //We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
  // Only change code below this line
  arr.splice(1,4);
  
  // Only change code above this line
  console.log(arr);

  //We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
  //example const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);
// The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

  function htmlColorNames(arr) {"DarkGoldenRod",
  "WhiteSmoke",
  "LavenderBlush",
  "PaleTurqoise",
  "FireBrick"};
  {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
  };
  console.log(
    htmlColorNames([
      "DarkGoldenRod",
      "DarkSalmon",
      "BlanchedAlmond",
      "PaleTurqoise",
      "FireBrick"
    ])
  );

  //We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.
  function forecast(arr) {
    // Only change code below this line
  let newforecast = arr.slice(2,4);
    return arr.slice(2,4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//   Copy an Array with the Spread Operator

//We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
      newArr.push([...arr]);
      // change code above this line
      num--;
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 2));

  //Combine Arrays with the Spread Operator
  //We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is','fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());


  //indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

  function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
      return true;
    }
    return false;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


  //We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        //Checks every parameter for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
      }
    }
  
    // change code above this line
    return newArr;
  }
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//  Create complex multi-dimensional arrays

//We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.

let myNestedArray = [
    // change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
    // change code above this line
  ];

  //Add Key-Value Pairs to JavaScript Objects
  //A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  // change code below this line
  foods["bananas"] = 13;
  foods["grapes"] = 35;
  foods["strawberries"] = 27;
  // change code above this line
  console.log(foods);

  //Modify an Object Nested Within an Object

  //Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.

  let userActivity = {
    id: 23894201352,
    date: "January 1, 2017",
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // change code below this line
  userActivity.data.online = 45;
  // change code above this line
  
  console.log(userActivity);

  //Access Property Names with Bracket Notation

  //We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // do not change code above this line
  
  function checkInventory(scannedItem) {
    // change code below this line
    return foods[scannedItem];
  }
  
  // change code below this line to test different cases:
  console.log(checkInventory("apples"));

  //Use the delete Keyword to Remove Object Properties

  //Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code below this line
  
  // Only change code above this line
  
  console.log(foods);


  //Check if an Object has a Property
//Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }
//Iterate Through the Keys of an Object with a for...in Statement

  //We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

  function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }

  //Generate an Array of All Object Keys with Object.keys()
//Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(obj);
    // change code above this line
  }
  
  console.log(getArrayOfUsers(users));


  //Modify an Array Stored in an Object
//Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

let user = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // change code above this line
  }
  
  console.log(addFriend(user, "Pete"));





