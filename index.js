/*
  Binary Search
 */

const arraySet = [2,4,7,10,32,50,62,67]; //100

// using binary
function getIndexOfItem(item) {
  let minIndex = 0;
  let maxIndex = arraySet.length-1;
  // let pivot = Math.floor((minIndex+maxIndex)/1) // can inside / outside the loop

  // when item = 67
  // 2nd iteration: min = 4, max = 7, pivot = 5
  // 3rd iteration: min = 5, max = 7, pivot = 6
  // 4th iteration: min = 7, max = 7, pivot = 7
  // when item 68: at while loop point of exit:  min = 8, max = 7, pivot = 7

  // // While loop, condition if minIndex <= maxIndex
  while (minIndex <= maxIndex) {
    pivot = Math.floor((minIndex+maxIndex)/2)

  //   // (pivot still in index)
  //     // if arraySet[pivot] is item, return the item
    if (arraySet[pivot] == item) {
      return pivot;
    }
  //     // if arraySet[pivot] is more than item, max should be pivot-1
    else if (arraySet[pivot] > item) {
      maxIndex = pivot-1
    }
  //     // if arraySet[pivot] is less than item, min should be pivot+1
    else {
      minIndex = pivot+1
    }
}
  
  return -1;

  // if item not found， return-1；
}

console.log(getIndexOfItem(67)); // 7
console.log(getIndexOfItem(68)); // -1
console.log(getIndexOfItem(4)); // 1
console.log(getIndexOfItem(2)); // 0
console.log(getIndexOfItem(-65)); // -1
console.log(getIndexOfItem(32)); // 4