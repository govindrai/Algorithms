
function naiveBubbleSort(arr) {
    for (let i = 0; i < arr.length -2 ; i++) {
        innerLoopCount = 0;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            innerLoopCount++
            if (arr[j] > arr[j+1]) {
                temp = arr[j + 1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
        console.log(innerLoopCount);
    }
    console.log(arr);
    return arr
}

naiveBubbleSort([2,1,4,5,6,3])
