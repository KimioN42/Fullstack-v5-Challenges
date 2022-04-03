function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    } 
    return arr;
}

var initialArray = [];
var sortedArray = [];
var arrayLength;

do {
    arrayLength = parseInt(prompt("Enter array length (number)"));
} while (isNaN(arrayLength));

console.log("Length of array: ", arrayLength);


for (let i = 0; i < arrayLength; i++) {
    let newNumber;
    do {
        newNumber = parseInt(prompt("Enter a valid number to push to position " +
        i + " of the Array"));
    } while (isNaN(newNumber));
    console.log("Number addded to array: " + newNumber);
    initialArray.push(newNumber)
}

console.log("Initial array: " + initialArray);
document.getElementById("initialArray").innerHTML = "Initial array: " + initialArray;

sortedArray = bubbleSort(initialArray);
console.log("Sorted array: " + sortedArray);
document.getElementById("sortedArray").innerHTML = "Sorted array: " + sortedArray;