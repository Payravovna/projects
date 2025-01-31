// 1

let nums = [1,2,5,6,22,44,66,3,4,17,22,444];  
let result = 0;

nums.forEach(num =>  result += num);

console.log('Результат: '+ result);



// 2
let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null, "29.01.1992"];

let string = [];
let number = [];
let object = [];
let boolean = [];

arr.filter(item => {
    if (typeof item === "string") {
        string.push(item);
    } else if (typeof item === "number") {
        number.push(item);
    } else if (typeof item === "boolean") {
        boolean.push(item);
    } else {
        object.push(item);
    }
});

console.log("String", string);
console.log("Number:", number);
console.log("Boolen:", boolean);
console.log("Object", object);
