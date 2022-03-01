// Q1: Implement the following function to take an iterable (essentially a list of things) and return the item in the list corresponding 
//to the maximum value in list after applying key to each item.

function key(x){
    return x
}
function max(iterable, key) {
    var maximum = iterable[0];
    for (var i in iterable) {
      var val = key(iterable[i]);
      if (val >= key(maximum)) {
        maximum = iterable[i];
      }
    }
    return maximum;
  }

//let iterable = [0, 2, -4, 3]
//console.log(max(iterable, key));

//Q2: Based on the previous question, in one line, write an anonymous function which, when passed as key to max would cause max to return 
//the smallest value in the list.

const reverser = x => -x;

//let iterable = [0, 2, -4, 3]
//console.log(max(iterable, reverser));



//Q4: We want to create a general purpose function to keep records. We pass a JSON object, key, and value to our function, and in return, 
//our function should do the following:
    //If the current value of the item at key is a singular item, update the key to correspond to value
    //If the current value of the item at key is a list, append value to the list
    //If the current value of the item at key is another JSON object, create a new entry using key as the key and value as the value

function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {
      object[key].push(value);
    } else if (typeof prev == 'object' && prev != null) {
      object[key] = value;
    } else {
        object[key] = value;
    }
    return null;
}

//var object = {1:[1,2], 2:1};
//changer(object, 3, 4);
//console.log(object);

//Q5: In this function, we want to print the numbers 1, 2, 3, 4, 5 in numerical order. Using Promises, fill in the function to print numbers
//in the correct order

async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        resolve(truthy)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = 5;
    console.log(five)
    return five
}


  