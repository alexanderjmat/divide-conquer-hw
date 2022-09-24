function binarySearch(arr, value) {
    let middleIndex = Math.floor((arr.length - 1) / 2)
    let lowestIndex = 0
    let highestIndex = arr.length - 1
    let counter = 0
    console.log(arr, arr[middleIndex])

    while (arr[middleIndex] != value && counter < 10) {
        counter++
        if (arr[middleIndex] > value) {
            highestIndex = middleIndex
            middleIndex = Math.floor((highestIndex + lowestIndex) / 2)
            console.log(lowestIndex, middleIndex, highestIndex)

        }

        if (arr[middleIndex] < value) {
            lowestIndex = middleIndex
            middleIndex = Math.round((highestIndex + middleIndex) / 2)
            console.log(lowestIndex, middleIndex, highestIndex)

        }
    }

    if (arr[middleIndex] == value) {
        return middleIndex
    }

}

binarySearch([2,3,4,5,6,7,8,10,11], 7)