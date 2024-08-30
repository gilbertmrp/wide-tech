function bubbleSort1(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        console.log(`Pass ${i + 1}:`);
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(`Step ${j + 1}:`, arr.join(', '));
        }
        console.log(`Array setelah pass ${i + 1}:`, arr.join(', '));
        console.log('----------------------');
    }
    return arr;
}

let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sortedArr = bubbleSort1(arr);
console.log("Array yang sudah diurutkan:", sortedArr);

