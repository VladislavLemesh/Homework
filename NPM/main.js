console.log("version: " + _.VERSION);
let firstArray = [1,2,3,4,5,6,7,8];
let secondArray = [2,4,6,8];
console.log("firstArray:" + firstArray);
console.log("secondArray:" + secondArray);
console.log("результат работы функции исключающей из первого массива элементы второго: " + _.difference(firstArray, secondArray));
