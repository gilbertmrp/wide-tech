function bubbleSort2(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n; i++) {
        swapped = false;    
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; 
            }
        }

        if (!swapped) break;
    }
    return arr;
}

let arr = [5, 3, 8, 4, 2, 6, 1, 7, 9, 0];
let sortedArr = bubbleSort2(arr);
console.log("Array yang sudah diurutkan:", sortedArr);

