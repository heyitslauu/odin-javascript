const sampleArr = [10,4,2,7,6];

function mergeSort(array) {
    if (array.length <= 1) return array;

    const midPoint = Math.ceil(array.length / 2);

    const leftHalf = mergeSort(array.slice(0, midPoint))
    const rightHalf = mergeSort(array.slice(midPoint))

    return mergeArr(leftHalf, rightHalf)
}


// const sampleArr = [5,4,1];

function mergeArr(leftArr, rightArr) {
    const mergedCollection = []

    while (leftArr.length > 0 && rightArr.length > 0) {

        const arrayWithMin = leftArr[0] < rightArr[0] ? leftArr : rightArr;
        
        const mergeElement = arrayWithMin.shift();
        mergedCollection.push(mergeElement);
    
    }

    return mergedCollection.concat(leftArr, rightArr);

}
console.log(mergeSort(sampleArr))
