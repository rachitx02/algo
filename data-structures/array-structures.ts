//Arrays
const arr = [1, "one", "2", 1];
const arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2: string[] = ["Rachit", "Gupta", "Software", "Dev"];

//Array Methods

//Basic Methods
const len = arr.length;

//toString() converts an array to a string
//where all the array values are , separated
const arrString = arr.toString();
//-> "1,one,2,1"

const index1 = arr1.at(1);
//->2

//join() by default works like toString()
//But we can specify the separator
const joinedArr = arr.join("!");
//->"1!one!2!1"
const joinedArr1 = arr.join();
//->"1,one,2,1"
const joinedArr2 = arr.join("");
//->"1one21"

//push() adds a new element at the end
//pop() removes the last element

//arr1+arr
//[1,2,3,4,5,6,7,8,9,101,"one","2",1] -weird

//--------------------------------------------------------------------------------------
//Searching Methods

//indexOf() returns the index of occurence of
//an element in an array
const first = arr.indexOf("one");
//it returns -1 if nothing is found

//lastIndexOf() returns the index of last
//occurence of an element similar to indexOf()

//includes() returns boolean if a value is
//present or not present

arr.includes(1); //true

//Sorting Methods

//sort() method sorts an array in ascending order

//reverse() reverses an array

//toSorted() is similar to sort() but it
//creates a new array

//toReversed() similar to reverse()
//but it creates a new array

//map
//filter
//reduce

//every method perform the given
// function for every element inside an array
//it does not change the array just
//returns true or false based on the result
const ages = [32, 33, 16, 40];
function checkAge(age) {
  return age > 18;
}
ages.every(checkAge);

//Objects(Hash tables)

//Object Methods

//String

//String Methods

// -----------------------------------------------------------------------------------

//Sets

/*Each value in a set can 
occur only once, Values can be of any type 
i.e. primitive types or objects*/

const letters = new Set(arr);
letters.add("R");
//to loop through
for (const x of letters) {
}
//length function dose not work on SET
console.log(letters.size);

//Sets Methods

// The has() method returns
// true if a specified value exists in a set.
const ans = letters.has(1);

// The forEach() method invokes a
// function for each Set element
let text = "";
letters.forEach(function (value) {
  text += value;
});

//-----------------------------------------------------------------------------------

//Maps
//Maps hold key value pair where key can be
//of any type
//Map remembers normal insertion order
//Map are objects

//Maps Methods
