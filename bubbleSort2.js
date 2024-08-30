function bubbleSort2(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n; i++) {
        swapped = false;    
        console.log(`Pass ${i + 1}:`);
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; 
            }
            console.log(`Step ${j + 1}:`, arr.join(', '));
        }
        console.log(`Array setelah pass ${i + 1}:`, arr.join(', '));
        console.log('----------------------');

        if (!swapped) break;
    }
    return arr;
}

let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sortedArr = bubbleSort2(arr);
console.log("Array yang sudah diurutkan:", sortedArr);

