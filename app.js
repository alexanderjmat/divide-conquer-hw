/* For all exercises: Time Complexity: O(log N)

/* Given an array of 1s and 0s which has all 1s first followed by all 0s, 
write a function called countZeroes, which returns the number of zeroes in the array. */

function countZeroes(arr) {
    let firstIndex = 0
    let middleIndex = Math.floor((arr.length - 1) / 2)
    let lastIndex = arr.length - 1

    if (arr[lastIndex] == 1) {
        return 0;
    }

    while (arr[firstIndex] != 0) {
        if (arr[middleIndex] != 0) {
            arr.splice(firstIndex, middleIndex + 1)
            middleIndex = Math.floor((arr.length - 1) / 2)
            lastIndex = arr.length - 1
        }
        else {
            middleIndex = Math.floor((middleIndex + firstIndex) / 2)
        }

    }

    if (arr[firstIndex] == 0) {
        return arr.length    
    }
}

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0







/* Given a sorted array and a number, write a function called sortedFrequency 
that counts the occurrences of the number in the array */

function sortedFrequency(arr, value) {
    let firstIndex = 0
    let middleIndex = Math.floor((arr.length - 1) / 2)
    let lastIndex = arr.length - 1
    let counter = 0

    if (arr[firstIndex] > value || arr[lastIndex] < value) {
        return -1
    }

    if (arr[middleIndex] == value) {
        if (arr[firstIndex] != value) {
            while (arr[middleIndex] == value) {
                middleIndex = Math.floor((firstIndex + middleIndex) / 2)
            }

        }
        
    }
    if (arr[middleIndex] != value) {
        while (arr[middleIndex] != value && counter < 5) {
            counter++
            if (arr[middleIndex] < value) {
                arr.splice(firstIndex, middleIndex + 1)
                middleIndex = Math.round((arr.length - 1) / 2)
                lastIndex = arr.length - 1
            }
            if (arr[middleIndex] > value) {
                arr.splice(middleIndex, arr.length) 
                middleIndex = Math.floor((arr.length - 1) / 2)
                lastIndex = arr.length - 1
            }
            console.log(arr)
        }

    }

    if (arr[middleIndex] == value) {
        if (arr[lastIndex] != value) {
            while (arr[middleIndex] == value) {
                middleIndex = Math.round((middleIndex + lastIndex) / 2)
            }

        }  
    }

    if (arr[middleIndex] != value) {
        while (arr[middleIndex] != value && counter < 5) {
            counter++
            if (arr[middleIndex] < value) {
                arr.splice(firstIndex, middleIndex + 1)
                middleIndex = Math.round((arr.length - 1) / 2)
                lastIndex = arr.length - 1
            }
            if (arr[middleIndex] > value) {
                arr.splice(middleIndex, arr.length) 
                middleIndex = Math.floor((arr.length - 1) / 2)
                lastIndex = arr.length - 1
            }
            console.log(arr)
        }

    }
   
    return arr.length

}


/*Write a function called findRotatedIndex which accepts a rotated array 
of sorted numbers and an integer. The function should return the 
index of num in the array. If the value is not found, return -1.*/

function findRotatedIndex(arr, value) {
    let counter = 0;
    let firstIndex = 0
    let middleIndex = Math.floor((arr.length - 1) / 2)
    let lastIndex = arr.length - 1
    while (arr[middleIndex] != value) {
        if (arr[middleIndex] > arr[lastIndex]) {
            if (value > arr[lastIndex]) {
                lastIndex = middleIndex
                middleIndex = Math.floor((firstIndex + lastIndex) / 2)
            }
            else if (value < arr[lastIndex]) {
                firstIndex = middleIndex
                middleIndex = Math.round((firstIndex + lastIndex) / 2)
            }
        }
        else if (arr[middleIndex] < arr[lastIndex]) {
            if (value > arr[lastIndex]) {
                lastIndex = middleIndex - 1
                middleIndex = Math.floor((firstIndex + lastIndex) / 2)

            }
            else if (value < arr[lastIndex]) {
                firstIndex = middleIndex
                middleIndex = Math.round((firstIndex + lastIndex) / 2)
            }
        }
        else {
            return -1
        }
            
    }
    if (value == arr[middleIndex]) {
         console.log(middleIndex)
        return middleIndex
    }

}

/*Write a function called findRotationCount which accepts an array of distinct 
numbers sorted in increasing order. The array has been rotated 
counter-clockwise n number of times. Given such an array, find the value of n.*/

function findRotationCount(arr) {
    let lowestIndex = 0
    let middleIndex = Math.floor((arr.length - 1) / 2)
    let highestIndex = arr.length - 1

    if (arr[middleIndex] < arr[highestIndex]) {
        while (arr[middleIndex] < arr[highestIndex]) {
            if (arr[middleIndex] < arr[middleIndex - 1]) {
                return middleIndex
            }
            else {
                highestIndex = middleIndex
                middleIndex = Math.floor((highestIndex + lowestIndex / 2))
            }
        }
    }
    else if (arr[middleIndex] > arr[highestIndex]) {
        while (arr[middleIndex] > arr[highestIndex]) {
            if (arr[middleIndex] > arr[middleIndex + 1]) {
                return middleIndex + 1
            }
            else {
                lowestIndex = middleIndex
                middleIndex = Math.floor((highestIndex + lowestIndex) / 2)
            }

        }
    }
    return 0;



}

/*Write a function called findFloor which accepts a sorted array 
and a value x, and returns the floor of x in the array. 
The floor of x in an array is the largest element in the array 
which is smaller than or equal to x. If the floor does not exist, return -1.*/

function findFloor(arr, value) {
    let lowestIndex = 0
    let middleIndex = Math.floor((arr.length - 1) / 2)
    let highestIndex = arr.length - 1
    let counter = 0

    if (arr[lowestIndex] > value) {
        return -1
    }

    if (arr[middleIndex] == value) {
        return arr[middleIndex]
    }

    else if (arr[middleIndex] > value) {
        arr.splice(middleIndex, highestIndex)
        console.log(arr)
        return arr[arr.length - 1] 
    }

    else if (arr[middleIndex] < value) {
        arr.splice(0, middleIndex + 1)
        middleIndex = Math.floor((arr.length - 1) / 2)
        highestIndex = arr.length - 1
        while (arr[middleIndex] < value && counter < 5) {
            counter++
            lowestIndex = middleIndex
            middleIndex = Math.round((lowestIndex + highestIndex) / 2)
        }
        return arr[arr.length - 1]
    }



}