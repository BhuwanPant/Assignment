function bubbleSortDescending(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

let numbers = [5, 2, 9, 1, 5, 6];

// Sorting the array in descending order using bubble sort
let sortedNumbers = bubbleSortDescending(numbers);
console.log(sortedNumbers);
