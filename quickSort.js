/*
Quick Sort:

Quick sort is a divide and conquer sorting algorithm. It creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recurively sort the sub arrays. Javascript’s native .sort() function uses Quicksort.

average: O(n log n)
worst: O(n^2)
*/


function quickSort(arr) {
  // Base case
  if (arr.length < 2) {
    return arr;
  }
  var left = [], right = [], pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {
    // Push each int in appropriate subarray according to pivot
    if (arr[i] < pivot) {
     left.push(arr[i]);
    } else {
     right.push(arr[i]);
    }
  }

  // Quick sort each subarray
  return quickSort(left).concat(pivot, quickSort(right));
}
