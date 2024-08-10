// You are given an already written function called modifyElement. Your job is  to write a function called modifyArr that takes in an array and a function as a parameter. Inside of the modifyArr function, you should loop through the array and for every iteration call the modifyElement function with the element as a parameter. You do not need to call the modifyArr function, just write it.

function modifyElement(el) {
    const newValue = el * 5;
    console.log(newValue);
}

function modifyArr(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

modifyArr([1, 2, 3, 4, 5], modifyElement);
