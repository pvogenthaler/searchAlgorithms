/*
Bubble Sort:

If the list is of length 0 or 1, then it is already sorted. Otherwise:
Divide the unsorted list into two sublists of about half the size.
Sort each sublist recursively by re-applying merge sort.
Merge the two sublists back into one sorted list.

Average & Worst: O(n^2)
*/


const bubbleSortOne = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


const bubbleSortTwo = function(arr) {
  let sorted = false
  while (!sorted){
    sorted = true;
    arr.forEach(function (num, i){
      if (num > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = num;
        sorted = false;
      }
    });
  }
  return arr;
}
