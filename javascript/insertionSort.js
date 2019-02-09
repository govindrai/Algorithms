function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        loop = 0;
        for (let j = i; j > 0; j--) {
            loop++
            if (arr[j] < arr[j-1]) {
                const temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            } else {
                break;
            }
        }
        console.log("looped ", loop, "times")
    }
    console.log(arr);
    return arr;
}

insertionSort([4,8,2,1,6,5])
insertionSort([6,5,4,3,2,1])