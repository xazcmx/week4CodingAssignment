//1
function makeFullName(firstName, lastName){
   return (`${firstName} ${lastName}`);
}

//2
const makeFullNameArw = (firstName, lastName) => `${firstName} ${lastName}`;

//3a

setTimeout(() => {
    alert("Time is up!");
}, 5000);

//3b
const askAreWeThereYet = () => {
    alert("Are we there yet?");
}

setInterval(askAreWeThereYet, [10000]);

//4a

let array1 = ["pizza", "tacos", "burgers", "rice", "sushi", "icecream", "steak"];

function processSplicedValue(arr, i, callback){
   let x = arr.splice(i, 1);
   callback(x);
}
processSplicedValue(array1, 0, console.log);

//4b
processSplicedValue(array1, 1, alert);

//4c
processSplicedValue(array1, 2,(y) => {alert(y)});

//4d
function doSomething(x){
    console.log(`Would you like to eat some ${x}?`);
}

processSplicedValue(array1, 3, doSomething);